const knex = require('knex');   // knex library
const knexConfig = require('../knexfile');   // knexfile database connector
const environment = process.env.DB_ENV || "development" || "production"

module.exports = knex(knexConfig[environment]);