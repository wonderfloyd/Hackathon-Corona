const knex = require('knex');
require('dotenv').config()
const {HOST, USER, DB_NAME} = process.env

const db = knex({
    client: 'pg',
    connection: {
      host : HOST,
      user : USER,
      password : 'password',
      database : DB_NAME
    }
  });

module.exports = db;