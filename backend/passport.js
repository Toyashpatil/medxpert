const passport = require('passport')
var GoogleStrategy = require('passport-google-oauth20').Strategy;



passport.use(new GoogleStrategy({
    clientID: "908760431501-cdp13up0hk2gf83a4nsl0mgucujdjr2t.apps.googleusercontent.com",
    clientSecret: "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",
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