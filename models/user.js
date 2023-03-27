const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    namefull: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'The password is required'],
    },
    state:{
        type: Boolean,
        default: true,
    },
    vote:{
        type: Schema.ObjectId,
        ref: 'Vote'
    }
});

// Disable Password of the JSON
UserSchema.methods.toJSON =  function() {
    const  {__v, password, _id, ...user} =  this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model('User', UserSchema);


