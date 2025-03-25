#!/bin/bash

# Домены, для которых будет получен сертификат
domains=(awesomekyrgyztravel.com www.awesomekyrgyztravel.com)
email="your-email@example.com"  # Замените на свой email
staging=0  # Установите 1 для тестирования, 0 для продакшн-сертификатов

# Создание директорий для certbot
mkdir -p ./nginx/www
mkdir -p ./nginx/letsencrypt

# Проверка, существует ли уже настроенный certbot
if [ -d "./nginx/letsencrypt/live" ]; then
  read -p "Существующие сертификаты найдены. Продолжить и перезаписать? (y/N) " decision
  if [ "$decision" != "Y" ] && [ "$decision" != "y" ]; then
    exit
  fi
fi

# Запуск временного nginx для проверки домена
docker compose up -d nginx

# Запрос сертификата
if [ $staging != "0" ]; then staging_arg="--staging"; fi

for domain in "${domains[@]}"; do
  docker compose run --rm certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    --email $email \
    -d $domain \
    --agree-tos \
    --no-eff-email \
    --force-renewal
done

# Перезапуск nginx для применения настроек
docker compose restart nginx 