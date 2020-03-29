### Stage 1: build ###

FROM node:12.0.0-alpine as builder

# Set working directory.
RUN mkdir /app
WORKDIR /app

# Copy app dependencies.
COPY /package.json /package-lock.json /app/frontend/

# Install app dependencies.
RUN npm install --prefix frontend

# Copy app files.
COPY . /app

# Build app
RUN npm run build --prefix frontend -- --output-path=./dist/out

### Stage 2: delivery ###

FROM nginx:1.15.7-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy output directory from builder to nginx image.
COPY --from=builder /app/dist/out /usr/share/nginx/html

# Copy nginx configuration file.
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

