# FROM: Sets the base image for the subsequent instructions
# Use the Node.js 20 image as the base image
FROM node:20

# WORKDIR: Set the working directory inside the container
WORKDIR /usr/src/app

# COPY: Copies files from the host system to the container
# Copy package.json and package-lock.json
COPY package*.json ./

# RUN: Executes a command in the container
# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the TypeScript code (ensure TypeScript was installed before, see package.json)
RUN npm run tscCompile

# EXPOSE: Documents which ports the container listens to
# Expose the port the app runs on
EXPOSE 5000

# CMD: Specifies the command to run when the container starts
# Command to run the app
CMD ["npm", "start"]
