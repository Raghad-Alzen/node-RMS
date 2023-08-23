const mongoose = require('mongoose');
const driverschema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "please enter user firstName !"]
    },
    lastName: {
        type: String,
        required: [true, "please enter user lastName !"]
    },
    email: {
        type: String,
        required: [true, "please enter email !"]
    },
    password: {
        type: String,
        required: [true, "please enter password !"]
    },
    gender: {
        type: String,
        required: [true, "please enter gender !"]
    },
    /*age: {
        type: Number,
        required: [true, "please enter age !"]
    },*/
    phoneNumber: {
        type: String,
        required: [true, "please enter phoneNumer !"]
    },
    /*location: {
        type: String,
        required: [true, "please enter location !"]
    },*/
    });
const Driver = mongoose.model('Driver',driverschema);
module.exports = Driver;