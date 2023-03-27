const {Schema, model} = require('mongoose');
const VoteSchema = Schema({
    user:{
        type: Schema.ObjectId,
        ref: 'User'
    },
    score: [{
        movie: {
            type: Schema.ObjectId,
            ref: 'Movie'
        },
        vote: Number
    }]

});
module.exports = model('Vote', VoteSchema)