const PROXY_CONFIG = [
  {
    context: ['/api/**', '/static/**'],
    target: 'http://backend:8000',
    secure: false,
    logLevel: 'debug',
    changeOrigin: true
  }
];

module.exports = PROXY_CONFIG;
