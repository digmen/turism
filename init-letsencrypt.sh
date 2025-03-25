#!/bin/bash

# Домены, для которых будет получен сертификат
domains=(awesomekyrgyztravel.com www.awesomekyrgyztravel.com)
email="your-email@example.com"  # Замените на свой email
staging=0  # Установите 1 для тестирования, 0 для продакшн-сертификатов

# Создание директорий для certbot
mkdir -p ./nginx/www
mkdir -p ./nginx/letsencrypt
mkdir -p ./nginx/conf.d

# Проверка, существует ли уже настроенный certbot
if [ -d "./nginx/letsencrypt/live" ]; then
  read -p "Существующие сертификаты найдены. Продолжить и перезаписать? (y/N) " decision
  if [ "$decision" != "Y" ] && [ "$decision" != "y" ]; then
    exit
  fi
fi

# Очистка и пересоздание контейнеров
echo "Останавливаем и удаляем предыдущие контейнеры..."
docker compose down

# Запуск сборки контейнеров
echo "Собираем и запускаем контейнеры..."
docker compose build
docker compose up -d nginx

# Ожидание запуска nginx
echo "Ожидаем 20 секунд, чтобы nginx успел запуститься..."
sleep 20

# Запрос сертификата
if [ $staging != "0" ]; then 
  staging_arg="--staging"; 
  echo "Запуск в режиме тестирования (staging)";
else
  staging_arg="";
  echo "Запуск в режиме продакшн";
fi

for domain in "${domains[@]}"; do
  echo "Запрашиваем сертификат для домена $domain..."
  docker compose run --rm certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    --email $email \
    -d $domain \
    --agree-tos \
    --no-eff-email \
    --force-renewal
done

# Обновление конфигурации nginx для HTTPS
echo "Создаем конфигурацию HTTPS для nginx..."
cat > ./nginx/conf.d/default.conf <<EOF
server {
    listen 80;
    server_name awesomekyrgyztravel.com www.awesomekyrgyztravel.com;

    # Настройка для проверки домена через certbot
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    # Перенаправление на HTTPS
    location / {
        return 301 https://\$host\$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name awesomekyrgyztravel.com www.awesomekyrgyztravel.com;

    # SSL-сертификаты
    ssl_certificate /etc/letsencrypt/live/awesomekyrgyztravel.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/awesomekyrgyztravel.com/privkey.pem;

    # Настройки SSL
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    ssl_stapling on;
    ssl_stapling_verify on;

    # Проксирование запросов к Nuxt.js приложению
    location / {
        proxy_pass http://frontend:3000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

# Перезапуск всех контейнеров
echo "Перезапускаем контейнеры для применения новых настроек..."
docker compose down
docker compose up -d

echo "Готово! Ваш сайт теперь должен быть доступен по HTTPS." 