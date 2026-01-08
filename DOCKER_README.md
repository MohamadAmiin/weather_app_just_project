# Weather App - Docker Setup

This guide explains how to run the Weather App using Docker.

## Project Structure

```
weather-app/
├── backend/           # Node.js API server
│   ├── config/
│   ├── controllers/
│   ├── data/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── server.js
│   ├── app.js
│   ├── package.json
│   ├── Dockerfile
│   └── .env
├── frontend/          # React application
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── Dockerfile
│   └── vite.config.js
├── docker-compose.yml
└── DOCKER_README.md
```

## Prerequisites

- Docker installed on your machine
- Docker Compose installed

## Quick Start

### 1. Run with Docker Compose (Recommended)

This will start MongoDB, Backend, and Frontend all together:

```bash
# Build and start all containers
docker-compose up --build

# Or run in background (detached mode)
docker-compose up --build -d
```

### 2. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5009
- **MongoDB**: localhost:27017

### 3. Stop the Application

```bash
# Stop all containers
docker-compose down

# Stop and remove volumes (deletes database data)
docker-compose down -v
```

## Running Without Docker

### Start Backend
```bash
cd backend
npm install
npm run dev
```

### Start Frontend
```bash
cd frontend
npm install
npm run dev
```

## Individual Docker Commands

### Build Images Separately

```bash
# Build backend image
docker build -t weather-backend ./backend

# Build frontend image
docker build -t weather-frontend ./frontend
```

### Run Containers Separately

```bash
# Run MongoDB
docker run -d --name mongodb -p 27017:27017 mongo:6

# Run Backend
docker run -d --name backend -p 5009:5009 \
  -e MONGO_URI=mongodb://host.docker.internal:27017/weather-app \
  -e JWT_SECRET=your_secret \
  weather-backend

# Run Frontend
docker run -d --name frontend -p 3000:3000 weather-frontend
```

## Environment Variables

### Backend
| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 5009 |
| MONGO_URI | MongoDB connection string | mongodb://mongodb:27017/weather-app |
| JWT_SECRET | JWT secret key | your_super_secret_jwt_key_here |
| WEATHER_API_KEY | OpenWeatherMap API key | demo_key |

### Frontend
| Variable | Description | Default |
|----------|-------------|---------|
| VITE_API_URL | Backend API URL | http://localhost:5009 |

## Useful Commands

```bash
# View running containers
docker-compose ps

# View logs
docker-compose logs

# View logs for specific service
docker-compose logs backend
docker-compose logs frontend
docker-compose logs mongodb

# Restart a service
docker-compose restart backend

# Rebuild a specific service
docker-compose up --build backend
```

## Troubleshooting

### Port Already in Use
If you get a port conflict error, change the ports in `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"  # Change 3000 to 3001
```

### MongoDB Connection Issues
Make sure MongoDB container is running:
```bash
docker-compose ps mongodb
```

### Clear Everything and Start Fresh
```bash
docker-compose down -v
docker system prune -a
docker-compose up --build
```
