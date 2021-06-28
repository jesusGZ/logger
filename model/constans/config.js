// se requiere dotenv para darle un valor a las variables de entorno mediante el .env
require('dotenv').config();

const config = {

  port1: process.env.MONGO_LOCAL_PORT,
  port2: process.env.MONGO_EXT_PORT,
  host: process.env.MONGO_EXT_HOST,

  dbhost: process.env.MONGO_EXT_DBHOST,
  dbport: process.env.MONGO_EXT_DBPORT,
  user: process.env.MONGO_EXT_USER,
  pass: process.env.MONGO_EXT_PASS,
  db: process.env.MONGO_EXT_DBNAME,
};

module.exports = config;