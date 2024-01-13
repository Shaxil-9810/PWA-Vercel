FROM node:18-alpine

# Setting working directory to run command inside project
WORKDIR /var/www

# Copy dependency definitions
COPY ./package*.json ./

# Installing dependencies
RUN npm install --silent

# Get all the code needed to run the app
COPY ./ .

# Expose the port the app runs in
EXPOSE 5173

# Serve the app
CMD ["npm", "run", "dev", "--", "--host"]
