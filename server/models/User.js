const {Schema, model} = require('mongoose')
const mongoose = require("mongoose");

const User = new Schema({
    email: {type: String, required: true, unicode: true},
    password: {type: String, required: true},
    diskSpace: {type:Number, default: 10024**3*10},
    usedSpace: {type: Number, default: 0},
    avatar: {type: String},
    files: [{type: mongoose.ObjectId, ref: "File"}]
})

module.exports = model('User', User)