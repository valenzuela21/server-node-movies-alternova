const {request, response} = require("express");
const Vote = require('../models/vote');
const voteMovie = async (req = request, res = response) => {
        const newVote =  new Vote(req.body);
        try{
            await  newVote.save();
            res.json({msg: "Insert new vote success fully"})
        }catch (error){
            console.log(error);
            res.status(500).json({
                msg: 'Error in insert vote'
            })
        }
}

const voteUpdateMovie = async (req = request, res = response) => {
    const newVote =  new Vote(req.body);
    let userExist = Vote.findById(newVote.user);
    console.log(userExist);
}

module.exports = {
    voteMovie,
    voteUpdateMovie
}