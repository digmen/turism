# Этап сборки
FROM node:20-alpine AS builder

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все остальные файлы в контейнер
COPY . .

# Устанавливаем переменную среды
ENV NODE_ENV=production

# Строим проект Nuxt
RUN npm run build

# Финальный этап
FROM node:20-alpine

WORKDIR /app

# Копируем только необходимые файлы из этапа сборки
COPY --from=builder /app/.output /app/.output
COPY --from=builder /app/package.json /app/package.json

# Указываем порт, на котором будет работать приложение
EXPOSE 3000

# Команда для запуска приложения
CMD ["node", ".output/server/index.mjs"]