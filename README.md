# Travel Booking Application - 3 Tier Architecture Using Docker compose

## Project Overview

This project demonstrates a complete 3-tier web application deployed using Docker and Docker Compose on an AWS EC2 Ubuntu server.

The application is a modern Travel Booking Website that includes:

- Frontend using Nginx
- Backend using Node.js and Express
- PostgreSQL Database
- Dockerized architecture
- Docker Compose orchestration
- AWS EC2 deployment

---

# Architecture

Browser
↓
Nginx Frontend
↓
Node.js Backend
↓
PostgreSQL Database

---

# Technologies Used

| Technology | Purpose |
|------------|----------|
| HTML/CSS/JavaScript | Frontend UI |
| Nginx | Web Server |
| Node.js | Backend Runtime |
| Express.js | API Server |
| PostgreSQL | Database |
| Docker | Containerization |
| Docker Compose | Multi-container management |
| AWS EC2 | Cloud Hosting |
| Ubuntu 24.04 | Operating System |

---

# Features

- Modern responsive travel website
- Booking form
- Dynamic booking table
- Popular destinations section
- Multi-container architecture
- Dockerized deployment
- Cloud hosting on AWS

---

# Project Structure

```bash
lightweight-app/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── Dockerfile
│
├── backend/
│   ├── package.json
│   ├── server.js
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

# AWS EC2 Setup

## Step 1 - Launch EC2 Instance

- Ubuntu 24.04
- t3.micro

## Step 2 - Configure Security Group

Allowed Ports:

| Port | Purpose |
|------|----------|
| 22 | SSH |
| 80 | Frontend |
| 5000 | Backend |

---

# Docker Installation

```bash
sudo apt update
sudo apt install docker.io -y

sudo systemctl start docker
sudo systemctl enable docker
```

---

# Docker Compose Installation

```bash
sudo apt install docker-compose-v2 -y
```

---

# Frontend Setup

The frontend was built using:

- HTML
- CSS
- JavaScript

The frontend is served using Nginx.

### Frontend Dockerfile

```dockerfile
FROM nginx:latest

COPY . /usr/share/nginx/html

EXPOSE 80
```

---

# Backend Setup

Backend was developed using:

- Node.js
- Express.js

### Backend Dockerfile

```dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

---

# Docker Compose Configuration

```yaml
services:

  frontend:
    build: ./frontend
    ports:
      - "80:80"

  backend:
    build: ./backend
    ports:
      - "5000:5000"

  db:
    image: postgres

    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: mydb
```

---

# Running the Application

## Build and Start Containers

```bash
sudo docker compose up -d --build
```

## Verify Containers

```bash
sudo docker ps
```

---

# Access Application

Frontend:

```bash
http://EC2_PUBLIC_IP
```

Backend API:

```bash
http://EC2_PUBLIC_IP:5000
```

---

# Challenges Faced During Project

## 1. Docker Compose Issues

Initially containers were not communicating properly due to incorrect service configuration.

### Solution

Used Docker Compose networking and proper service naming.

---

## 2. Nginx Static File Loading

Frontend initially showed default Nginx page.

### Solution

Correctly copied frontend files inside:

```bash
/usr/share/nginx/html
```

---

## 3. Port Accessibility on AWS

Application was inaccessible from browser.

### Solution

Updated AWS Security Group inbound rules for:

- Port 80
- Port 5000

---

## 4. UTF-8 Encoding Problem

Special characters appeared incorrectly.

### Solution

Added:

```html
<meta charset="UTF-8">
```

inside HTML head section.

---

## 5. Docker Build Errors

Containers failed during build because dependencies were missing.

### Solution

Installed Node.js dependencies properly using:

```dockerfile
RUN npm install
```

---

# Key Learnings

## Docker

Learned:

- Docker images
- Docker containers
- Dockerfile creation
- Container networking
- Image building
- Port mapping

---

## Docker Compose

Learned:

- Multi-container deployment
- Service orchestration
- Container communication
- Volume and networking basics

---

## AWS

Learned:

- EC2 setup
- Security Groups
- SSH access
- Cloud deployment

---

## Frontend Development

Learned:

- Responsive UI design
- CSS Grid
- Hero sections
- Professional layouts

---

## Backend Development

Learned:

- REST APIs
- Express server setup
- JSON responses
- API routing

---

# Future Improvements

- Connect frontend to backend API
- Store bookings in PostgreSQL
- Add authentication
- Add admin dashboard
- Use React frontend
- Configure HTTPS
- Add CI/CD pipeline
- Kubernetes deployment


---

# Conclusion

This project provided hands-on experience with:

- Full-stack development
- Docker containerization
- Docker Compose orchestration
- AWS cloud deployment
- Multi-tier application architecture

The project successfully demonstrates deployment of a scalable 3-tier application using modern DevOps practices.
