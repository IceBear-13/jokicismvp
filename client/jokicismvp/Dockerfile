# Build stage
FROM node:latest as build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
# Remove duplicate npm install since npm ci already installs
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]