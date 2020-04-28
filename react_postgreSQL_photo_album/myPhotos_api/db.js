const knex = require('knex');
require('dotenv').config()
const {HOST, USER, DB_NAME} = process.env
// console.log(HOST, USER, DB_NAME)
// const db = knex({
//   client: 'pg',
//   connection: {
//     host : '127.0.0.1',
//     user : 'itai',
//     password : '',
//     database : 'photo-app'
//   }
// });


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