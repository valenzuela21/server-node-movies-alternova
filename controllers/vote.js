const {request, response} = require("express");
const Vote = require('../models/vote');
const voteMovie = async (req = request, res = response) => {
        const newVote =  new Vote(req.body);
        try{
            let userExist = await Vote.find({user: req.body.user});
            if (userExist.length >= 1) {
                res.status(401).json({
                    msg: 'This user exists in the database'
                });
                return false;
            }
            await newVote.save();
            res.json({msg: "Insert new vote success fully"})
        }catch (error){
            console.log(error);
            res.status(500).json({
                msg: 'Error in insert vote'
            })
        }
}

const voteUpdateMovie = async (req = request, res = response, next) => {
    try {
        let userExist = await Vote.findById(req.params.id);
        if (!userExist) {
            res.status(401).json({
                msg: 'This user has never voted'
            });
            return false;
        }
        console.log(req.params.id);
        console.log(req.body);
        let vote =  await Vote.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});

        res.json({
            msg: "Add new vote success fully",
            vote
        });

    }catch (error){
        console.log(error)
        next();
    }
}

module.exports = {
    voteMovie,
    voteUpdateMovie
}