const passport = require('passport')
require('dotenv').config()
var GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.use(new GoogleStrategy({
    clientID: process.env.API_Google_Client_ID,
    clientSecret: process.env.API_Google_Secret_Key,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, cb, done) {

        return (done(null, profile));

    }
));


passport.serializeUser((user, done) => {
    done(null, user)

})

passport.deserializeUser((user, done) => {
    done(null, user)
})