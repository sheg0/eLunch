# Use an official Node runtime as a parent image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build


# Expose the port the app runs on
EXPOSE 3000

# Define environment variable
ENV NODE_ENV production

# Start Nginx
CMD ["npm", "start"]