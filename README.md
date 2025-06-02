# Docker 기반 TODO 웹 애플리케이션

## 디렉토리 구조

todo-app/
├── backend/                  
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
|
├── frontend/                 
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
|
├── docker-compose.yml        
└── README.md

## 🚀 실행 방법

### 1. 프로젝트 클론

git clone https://github.com/gam1017/todo-app.git
cd todo-app

### 2. Docker Compose로 실행
docker-compose up --build

### 3. 웹 브라우저 접속
http://localhost:3000

### 4. 종료
docker-compose down