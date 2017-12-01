
const env = process.env.NODE_ENV || 'development';

const options = {
    development: {
        "name": "development",
        "port": 3000,
        "host": "localhost",
        "devURL": "http://localhost:3000",
        "dbURL": `postgres://${process.env.DB_USER}:${process.env.DB_PW}@localhost:5432/stacks`,
    },
    production: {
        "name": "production",
        "port": "",
        "host": "",
        "devURL": "",
        "dbURL":""
    }
}


module.exports = options[env];