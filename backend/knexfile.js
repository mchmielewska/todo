// Update with your config settings.

module.exports = {
  test: {
    client: 'sqlite3',
    connection: {
      filename: './data/db_test.sqlite3',
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds',
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/db.sqlite3',
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
  },
};
