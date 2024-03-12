const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    fullName: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true,
    },
    phonenumber: {
        type: String,
        require: true
    },
    bloodgroup: {
        type: String,
        require: true
    },
    previous_Vacination: {
        type: Array,
        require: true
    },
    chronic_illness: {
        type: String,
        require: true
    },
    allergies: {
        type: String,
        require: true
    },
    emergency_contact: {
        type: String,
        require: true
    },
});
const User = mongoose.model('user', userSchema);
User.createIndexes();
module.exports = User;