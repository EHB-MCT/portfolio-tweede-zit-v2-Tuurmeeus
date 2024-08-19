const knex = require('knex')({
    client: 'pg',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: 'tuur',
        database: 'portfolio_db'
    }
});

module.exports = knex;

