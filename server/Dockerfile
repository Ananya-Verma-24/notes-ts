# server/Dockerfile

# Use Node.js image as base
FROM node:latest

# Set working directory
WORKDIR /usr/src/app/server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
