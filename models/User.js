const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [ isEmail, 'invalid email' ]
        },
        thoughts: [],
        friends: []
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        }
    }
);

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;