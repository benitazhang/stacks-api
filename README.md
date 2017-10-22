# Express Server w/ Facebook Login
Lightweight MVC server boiler plate using: express, passport, postgreSQL, JSON web token

## Getting Started
1) Register app at [Facebook Developers](https://developers.facebook.com/). You will be issued an app ID and secret. 
2) Add Facebook Login. Don't use Quick Start, just go to Settings and set the OAuth redirect URI to http://localhost:3000/login/facebook/callback
3) If you haven't already, start up PostgreSQL server and create username/password. [PostgreSQL tutorial](https://www.codementor.io/devops/tutorial/getting-started-postgresql-server-mac-osx)
4) create .env file and fill in the following variables with your fb app and postgreSQL credentials
```
export DB_USER = <postgresql username>;
export DB_PW = <postgresql password>;
export FB_ID = <facebook app id>;
export FB_SECRET = <facebook app secret>;
```
5) `source .env`
6) `npm install`
7) `npm start`

## Note
This project uses token based authentication instead of Passport sessions. When a user authenticates through Facebook, their Facebook ID is used to look up the user ID in the database. The user ID is then encoded to a JSON web token and sent to the client
