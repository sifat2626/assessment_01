const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
        name: {type: String, trim: true, required: true,unique: true},
        email: {type: String, trim: true, required: true, unique: true},
        password: {type: String, required: true,
            minLength: [6, 'password cannot have less than 6 characters'],
            maxLength: [64, 'password cannot have more than 16 characters'],
        }
    },
    {timeStamp: true, versionKey: false})

const User = mongoose.model('User', authSchema);

module.exports = User;