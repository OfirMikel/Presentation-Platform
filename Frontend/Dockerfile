# Use the official Node.js image as a base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that Vite uses (default is 3000)
EXPOSE 3000

# Start the Vite development server
CMD ["npm", "run", "dev"]