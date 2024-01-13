# User Manual

## Dockerization of Project

- Copy all given docker files inside your project directory
- Now open docker-compose.yml & Dockerfile to edit ports according to your project exposed port
- To run your project in docker run following command at the same directory level inside the terminal

```bash
docker compose up -d
```

- To remove containers run

```bash
docker compose down
```

- To remove created images and all stuff first run above given command then run

```bash
docker system prune -a
```