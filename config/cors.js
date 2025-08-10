const cors = require('cors');

const allowedOrigins = process.env.CORS_ORIGINS
  ? process.env.CORS_ORIGINS.split(',')
  : ['http://localhost:3000', 'http://localhost:5000'];

module.exports = cors({
  origin: allowedOrigins,
  credentials: true,
});