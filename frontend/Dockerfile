FROM node:18

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# serve 빌드된 정적 파일
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
