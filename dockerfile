FROM node:18
WORKDIR /app
COPY package*.json ./
COPY .env .env
RUN npm install
COPY . .
EXPOSE 8080
# Comando final: rodar as migrations e iniciar o app
CMD npm run migration:run && npm run dev
