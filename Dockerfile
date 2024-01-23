FROM node:18-bullseye-slim

# Updating repos
RUN apt update

# Setting working directory to run command inside project
WORKDIR /var/www

# Copy dependency definitions
COPY . .

# Installing dependencies
RUN npm install --silent

# Expose the port the app runs in
EXPOSE 5173

# Serve the app
CMD ["npm", "run", "dev", "--", "--host"]
