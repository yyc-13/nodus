# Start from the official Node.js 14 image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of your app's source code
COPY . . 

# Expose the port that your app runs on
EXPOSE 3000

# Start the app
CMD ["yarn", "dev"]
