# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and yarn.lock files to the container at /app
COPY package*.json ./

# Install the project dependencies
RUN npm install

# If you're using yarn, you can use the following command instead:
# RUN yarn install

# Copy the rest of the project files to the container at /app
COPY . .

# Build the Vite application
RUN npm run build

# Expose the port that the Vite application will run on
EXPOSE 3000

# Start the Vite application
CMD ["npm", "run", "preview"]
