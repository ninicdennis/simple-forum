var knex = require('knex')({
   client: 'pg',
   version: '7.2',
   connection: {
     host : '127.0.0.1',
     port : '32770',
     user : 'docker',
     password : 'docker',
     database : 'docker'
   }
 });

 module.exports = knex