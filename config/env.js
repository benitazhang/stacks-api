
const env = process.env.NODE_ENV || 'development';

const options = {
    development: {
        "name": "development",
        "port": 3000,
        "host": "localhost",
        "devURL": "http://localhost:3000",
        "dbURL": `postgres://${process.env.DB_USER}:${process.env.DB_PW}@localhost:5432/app`,
        "fb": {
            "appID": process.env.FB_ID,
            "appSecret": process.env.FB_SECRET,
            "callbackURL": "http://localhost:3000/login/facebook/callback"
        }
    },
    production: {
        "name": "production",
        "port": "",
        "host": "",
        "devURL": "",
        "dbURL":"",
        "fb": {
            "appID": "",
            "appSecret": "",
            "callbackURL": ""
        }
    }
}


module.exports = options[env];