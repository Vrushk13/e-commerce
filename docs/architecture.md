# E-Commerce Order Management System

## 1. Project Overview

This project is a full-stack e-commerce order management application.

The application uses:

- React with Vite for the frontend
- Spring Boot for backend microservices
- MongoDB for order data
- PostgreSQL for inventory data
- Kafka for asynchronous messaging
- Redis for caching
- Docker for containerization
- Prometheus for monitoring

## 2. Application Architecture

The application contains the following components:

### Frontend

React + Vite application.

The frontend provides the user interface for:

- Home
- Give Order
- All Orders
- Order Info
- Inventory

### API Gateway

Spring Cloud Gateway receives API requests from the frontend and routes requests to backend services.

### Order Service

Spring Boot microservice responsible for order operations.

It communicates with:

- MongoDB
- Redis
- Kafka
- Inventory Service

### Inventory Service

Spring Boot microservice responsible for inventory operations.

It communicates with:

- PostgreSQL
- Redis
- Kafka

### MongoDB

MongoDB stores e-commerce order information.

### PostgreSQL

PostgreSQL stores inventory-related data.

### Kafka

Kafka is used for asynchronous communication and order events.

### Zookeeper

Zookeeper is used by the current Kafka setup.

### Redis

Redis is used for caching.

### Prometheus

Prometheus collects application and service metrics.

## 3. Current Docker Architecture

Docker Compose is currently used to run the application locally.

Main services:

- frontend
- gateway-service
- order-service
- inventory-service
- mongodb
- postgres-inventory
- kafka
- zookeeper
- redis
- prometheus

## 4. Current Local Ports

| Component | Port |
|---|---:|
| Frontend | 5173 |
| Gateway | 8080/8081 |
| MongoDB | 27017 |
| PostgreSQL | 5432 |
| Redis | 6379 |
| Kafka | 9092 |
| Prometheus | 9090/9091 |

## 5. DevOps Roadmap

The project will be enhanced with:

1. Docker production improvements
2. Jenkins CI/CD
3. Terraform infrastructure
4. Ansible configuration management
5. Kubernetes deployment
6. Helm charts
7. Prometheus and Grafana monitoring
8. Centralized logging using ELK
9. Security scanning
10. AI-assisted incident analysis
11. Documentation and architecture diagrams

## 6. Current Status

The application has been successfully tested locally using Docker Compose.

The frontend is accessible through:

http://localhost:5173

The Docker containers are running successfully.
