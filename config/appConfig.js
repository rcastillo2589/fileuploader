/**
 * Configuration settings
 */

const url = require('url');

// Parse auth settings from database url
const dbUrlParams = url.parse(process.env.DATABASE_URL);
const auth = dbUrlParams.auth.split(':');

module.exports = {
  // Storage bucket
  S3_BUCKET: process.env.S3_BUCKET,
  // Pool Configuration
  poolConfig: {
    user: auth[0],
    password: auth[1],
    host: dbUrlParams.hostname,
    port: dbUrlParams.port,
    database: dbUrlParams.pathname.split('/')[1],
    ssl: true
  },
  port: (process.env.PORT || 5000)
};
