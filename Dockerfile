# Use a compatible Node version for legacy tooling
FROM node:14

# Create app directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source
COPY . .

# Expose Webpack dev server port
EXPOSE 8080

# Default command to run dev server
CMD ["npm", "run", "start"]
