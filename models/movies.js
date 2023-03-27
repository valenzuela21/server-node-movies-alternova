const {Schema, model} = require('mongoose');
const MovieSchema = Schema({
    name:{
        type: String,
        required: [true, 'name movies is required']
    },
    gender:{
        type: String,
        required: [true, 'gender is required'],
        enum: [ 'action', 'terror', 'comedy', 'romantic', 'suspense', 'fantasy']
    },
    type: {
        type: String,
        required: [true, 'type is required'],
        enum: ['series', 'movie']
    },
    visible: {
        type: Boolean,
        default: true
    },
    image:{
        type: String,
        default: "https://placehold.co/300x400"
    },
    score: {
        type: String,
        default: 0
    }
});
module.exports = model('Movie', MovieSchema)