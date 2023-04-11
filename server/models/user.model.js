const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
    username: { 
        type: String,
        required: [true, 'Username name is required.'],
        unique: [true, 'Username is already in use.'],
        minlength: [5, 'Username must be 5 characters or longer.']
        },

    userEmail: { 
        type: String,
        required: [true, 'An email address is required.'],
        unique: [true, 'Email address is already in use.'],
        // match: ** Need RegExp here **
    },

    firstName: { 
        type: String,
        required: [true, 'First name is required'],
        minlength: [2, 'First name must be longer then 1 character']
    },

    lastName: { 
        type: String,
        required: [true, 'Last name is required'],
        minlength: [2, 'Last name must be longer then 1 character']
    },

    userStateOrProvence: { 
        type: String,
        required: [true, 'A state or provence is required']
    },
        
    userNearestCity: { 
        type: String,
        required: [true, 'A city is required'] 
    },

    primaryPlatformUsername: { 
        type: String,
        required: [true, 'A primary platform username or channel name is required']
    },

    primaryPlatformUsed: {
        type: String,
        required: [true, 'You must choose a primary platform']    
    },

    primaryContentCat: {
        type: String,
        required: [true, 'You must choose the content category of the indicated primary platform.']
    },

    secondaryPlatformUsername: {
        type: String
    },

    secondaryPlatformUsed: {
        type: String
    },

    secondaryContentCat: {
        type: String
    },

}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);

