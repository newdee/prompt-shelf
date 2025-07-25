# Prompt Shelf

A prompt management system with version control capabilities, built with Rust and modern web technologies.

## Motivation

In AI development projects, prompts are often managed as static files or directly embedded in code, leading to several critical issues:
- **Code Pollution**: Embedded prompts clutter application code, reducing readability and maintainability
- **Inefficient Iteration**: Prompt adjustments require code modifications and full application redeployment
- **Lack of History**: No systematic way to track changes, compare versions, or roll back to previous prompt iterations
- **Collaboration Barriers**: Difficult to collaborate on prompt improvements without proper version tracking

PromptShelf addresses these challenges by providing Git-like version control specifically designed for AI prompts.

## Features

- **Git-like Version Control**: Track prompt changes with commit history, rollbacks, and comparisons
- **Separation of Concerns**: Keep prompts independent from application codebase
- **REST API Interface**: Integrate prompt management directly into development workflows
- **Performance Optimization**: Dragonfly/Redis caching for fast prompt retrieval
- **Access Control**: JWT authentication and role-based permissions
- **Docker-ready**: Easy deployment with pre-configured containers

Key benefits:
- Reduce deployment cycles by managing prompts outside application code
- Improve collaboration with structured version history
- Maintain cleaner codebase with separated concerns
- Enable A/B testing of prompts without code changes

## Preview
![Web UI](./doc/preview/screenshot1.png)
![Web UI](./doc/preview/screenshot3.png)
![Web UI](./doc/preview/screenshot4.png)

## Quick Start

### Prerequisites
- Docker and Docker Compose installed

### Installation

1. Clone this repository
2. Navigate to the project directory:
   ```bash
   cd prompt-shelf
   ```
3. Start the services using Docker Compose:
   ```bash
   docker-compose up --build -d
   ```
4. The API server will be available at http://localhost:8000

## Environment Configuration

The following environment variables can be configured in the docker-compose.yml file:

- `MYSQL_URI`: MySQL connection string
- `REDIS_URI`: Dragonfly/Redis connection string
- `JWT_SECRET`: JWT signing secret
- `JWT_EXPIRATION`: JWT expiration time (seconds)
- `ALLOW_REGISTER`: Allow user registration (true/false)

## API Documentation

For detailed API documentation, please refer to the [Markdown documentation](./doc/PromptShelf.md)

### Key API Endpoints Summary

### Authentication

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| POST   | /user/signin       | User login                   |
| POST   | /user/signup       | User registration            |

### Prompt Management

| Method | Endpoint                 | Description                  |
|--------|--------------------------|------------------------------|
| POST   | /prompt/create_prompt    | Create a new prompt          |
| POST   | /prompt/create_node      | Create a new version node    |
| POST   | /prompt/create_commit    | Commit changes to a prompt   |
| GET    | /prompt/query            | Query prompts                |
| GET    | /prompt/latest           | Get latest prompt version    |
| GET    | /prompt/content          | Get prompt content           |
| POST   | /prompt/rollback         | Rollback to previous version |
| POST   | /prompt/revert           | Revert changes               |
| DELETE | /prompt/                 | Delete a prompt              |

### System

| Method | Endpoint           | Description                  |
|--------|--------------------|------------------------------|
| GET    | /status            | Check service health status  |

### Admin Control

| Method | Endpoint                | Description                          |
|--------|-------------------------|--------------------------------------|
| POST   | /control/register       | Enable/disable user registration     |
| GET    | /control/list/user      | List all users (admin only)          |
| DELETE    | /control/user/{user_id}      | delete users (admin only)          |
| POST  | /control/disable/user      | disable/enable users (admin only)          |


## Project Structure

```
prompt-shelf/
├── src/                 # Rust backend source
│   ├── db/              # Database models
│   ├── routes/          # API route handlers
│   └── main.rs          # Application entry point
├── app/                 # Frontend application
├── conf/                # Configuration files
├── docker-compose.yml   # Docker Compose configuration
└── Cargo.toml           # Rust dependencies
```

## Technology Stack

- **Backend**: Rust, Axum, SeaORM
- **Database**: MySQL, Dragonfly (Redis)
- **Authentication**: JWT
- **Containerization**: Docker, Docker Compose

## License

[MIT](LICENSE)
