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

│

├── nginx/

│   ├── nginx.conf

|

├── docker-compose.yml        

└── README.md

----

## 실행 방법

#### 실행 전제 조건
> Docker가 깔려 있어야 함!

### 1. 프로젝트 클론

git clone https://github.com/gam1017/todo-app.git

cd todo-app

### 2. Docker Compose로 실행
docker-compose up --build

### 3. 웹 브라우저 접속
http://localhost

혹은

http://localhost:80

### 4. 종료
docker-compose down