FROM node:12.7.0 AS development
ENV DEBIAN_FRONTEND noninteractive
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
        && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
        && apt-get update -y \
        && apt-get install -y --no-install-recommends google-chrome-stable \
        && rm /etc/apt/sources.list.d/google-chrome.list \
        && rm -rf /var/lib/apt/lists/* /var/cache/apt/*
ENV CHROME_BIN google-chrome-stable
RUN addgroup --system dev \
    && adduser --system --ingroup dev dev
USER dev
COPY --chown=dev:dev package*.json /app/
WORKDIR /app
RUN npm install
COPY --chown=dev:dev . /app
ENV PATH=/app/node_modules/.bin:$PATH
EXPOSE 4200


