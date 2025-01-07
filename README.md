# NestJS GraphQL + TypeORM + Redis API

This application provides a basic CRUD API with **NestJS**, **TypeORM**, **GraphQL**, and **Redis** for caching. It is fully containerized with Docker, allowing you to spin up **NestJS**, **PostgreSQL**, and **Redis** in one command.

---

## Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your machine  
- [Docker Compose](https://docs.docker.com/compose/install/) installed  

---

## Getting Started

Clone the repository, then open a terminal in the project root.

### 1. Build and Run Containers

Run the following command to **build and start** all containers (NestJS, Redis, and Postgres):

```bash
docker-compose up --build
```
 * NestJS (app container) is exposed on port 3000.
 * Redis runs internally on port 6379, mapped to the same port on your host.
 * PostgreSQL runs on port 5432, also mapped to port 5432 on your host.

Once everything starts successfully, you can access the NestJS API at http://localhost:3000

## Using the API with Postman

A Postman collection containing all the API requests is provided in the postman folder of this project.

Steps to Import:
1. Open Postman.
2. Click on Import in the top-left corner.
3. Select the File tab.
4. Click on Upload Files.
5. Navigate to the project directory, go to the postman folder, and select `NestJS GraphQL API.postman_collection.json`.
6. Click Open to import the collection.

