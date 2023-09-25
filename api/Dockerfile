# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container to /app
WORKDIR /app

COPY db.json ./
COPY routes.json ./

RUN npm install -g json-server

EXPOSE 3001

# Define the command to run your application
CMD ["json-server", "--watch", "db.json", "--routes", "routes.json", "--port", "3001", "--host", "0.0.0.0"]
