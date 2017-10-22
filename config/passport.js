// configures passport to use facebook oauth
const
    passport = require('passport'),
    FacebookStrategy = require('passport-facebook'),
    moment = require('moment'),
    env = require('./env'),
    loginCtrl = require('../server/controllers/loginCtrl');
  

// config for facebook auth
passport.use(
    new FacebookStrategy({
        clientID: env.fb.appID,
        clientSecret: env.fb.appSecret,
        // redirect route after fb authenticates
        callbackURL: env.fb.callbackURL,
        profileFields: ['id','name','emails', 'photos']
    },
    // callback executed after user authenticates on FB page
    async (accessToken, refreshToken, profile, callback) => {
        let user = {};
        profile = profile._json;
        
        user.fbId = profile.id;
        user.firstName = profile.first_name;
        user.lastName = profile.last_name;
        user.email = profile.email || null;
        user.picture = profile.picture.data.url || null;
        user.createdAt = moment.utc().toISOString();

        let token = await loginCtrl.authorizeUser(user)

        callback(null, token);
    })
);


module.exports = passport;

