// Update with your config settings.
// Necessary to import dotenv here for the process.env to be recognized within the knexfile.js.
require('dotenv').config()

module.exports = {

  // development: {
  //   client: 'pg',
  //   version: '7.12.1',
  //   // connection: 'postgres://localhost:8012/yfusers',
  //   connection: process.env.DB_URL,
  //   migrations: {
  //     directory: './data/migrations',
  //   },
  //   seeds: {
  //     directory: './data/seeds',
  //   },
  //   useNullAsDefault: true
  // },
  development: {
    client: 'sqlite3',
    connection: process.env.DB_SQL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullAsDefault: true
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/yftest.db3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
