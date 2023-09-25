# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all files from the current directory to the working directory in the container
COPY --chown=node:node . .

# Build the React application (modify this if needed, e.g., for production build)
RUN npm run build

# Expose the port that the application will run on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]
