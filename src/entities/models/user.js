const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        phone: {
            type: String,
            required: true
        },
        passcode: {
            type: String, 
            required: true
        }
    }
)

module.exports = mongoose.model('User', UserSchema);