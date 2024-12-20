# Use Node.js as the base image
FROM node:23.1.0

WORKDIR /src

# Copy package.json and yarn.lock to the container
COPY package.json pnpm-lock.yaml drizzle.config.ts ./

# Install dependencies
RUN npm --legacy-peer-deps install

# Copy the app's source code to the container
COPY . .

# Push drizzle-schema
RUN npx drizzle-kit push

# Build the Next app
RUN npm run build

# Serve the production build
CMD ["npm", "start"]
