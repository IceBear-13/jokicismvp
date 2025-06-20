# NBA Statistics Project - JokicIsMVP
This project provides a comprehensive platform for accessing and exploring NBA basketball statistics. It consists of a full-stack application with a React/TypeScript frontend, Spring Boot backend, and data scraping components.

## Project Structure
The project is organized into three main components:

- /client/jokicismvp: React/TypeScript frontend built with Vite
- /server: Spring Boot Java backend application
- /scrapping: Data collection and processing scripts

## Client
The frontend is a modern React application built with TypeScript and Vite, featuring:

- Player statistics display with sortable tables
- Team information
- Coach information
- Responsive design using Tailwind CSS

### Client setup & running 
```bash
cd client/jokicismvp
npm install
npm run dev
```

### Building for production
```bash
npm run build
```

### Run the client in production mode
```bash
cd client/jokicismvp
docker build -t jokicismvp-client .
docker run -p 3000:3000 jokicismvp-client
```

## Server
The backend is powered by Spring Boot, providing:

- RESTful APIs for accessing NBA statistics
- Data persistence
- Business logic implementation

### Running the server
Remember to change the JDBC link and password to your PostgreSQL JDBC on /src/resources/application.properties
```bash
cd server
./mvnw spring-boot:run
```

### Building the server
```bash
cd server
./mvnw clean package
```

### Deploying the server into production
```bash
cd server
docker build -t jokicismvp-server .
docker run -p 8080:8080 jokicismvp-server
```

## Data Scraping
The scrapping directory contains scripts and tools for collecting and processing NBA statistics data, organized by:

- Basketball data organized by year (2024/2025)
- Per-season data collections
- Raw scrapped data
- Features
- View comprehensive player statistics including points, rebounds, and assists
- Filter and search for specific players
- Compare team performances
- Access coach information

## Technology Stack
- Frontend: React, TypeScript, Vite, Tailwind CSS
- Backend: Java, Spring Boot
- Containerization: Docker
- Data Storage: Database (details not specified in provided code)

## Development
This is a full-stack application that demonstrates modern web development practices including:

- Component-based UI architecture
- RESTful API design
- Containerization for consistent deployment
- Data processing and transformation
