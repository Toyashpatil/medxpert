const express = require("express")
const cors = require("cors")
const connectTOMongo = require('./db')
const passport = require('passport')
const session = require('express-session');
const app = express();
require('./passport')



const PORT = 5000;

app.use(cors())
app.use(express.json());
app.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

connectTOMongo()

app.use('/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('<a href="auth/google" >Authenticate with Google</a>')
})


app.listen(PORT, () => {
    console.log("Server Started on : " + PORT)
})