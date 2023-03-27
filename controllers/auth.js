const {response} = require('express');
const bcryptjs = require('bcryptjs');
const User = require('../models/user');

const {generateJWT} = require("../helpers/generate-jwt");

const insertUser = async (req, res = response) => {
    try {
        const {namefull, email, password} = req.body;
        const user = new User({namefull, email, password});

        // Encrypt PASSWORD
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        // Save Database
        await user.save();
        res.json({
            user
        });
    } catch (error) {
        return res.status(500).json({
            msg: "¡Hoooops! error insert user.",
        })
    }
}

const userById =  async (req, res = response) => {
    try{
        const user =  await User.findById(req.params.id).populate('vote');
        res.json({
            user
        })
    }catch (error){
        console.log(error);
        return res.status(500).json({
            msg: "Error consult user by id.",
        })
    }
}

const login = async (req, res = response) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email});
        //Check email exist
        if (!user) {
            return res.status(400).json({
                msg: "User database no found."
            });
        }

        // State User
        if (!user.state) {
            return res.status(400).json({
                msg: "User inactive =("
            })
        }

        //Check password
        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: "User or password they are not correct."
            })
        }

        // Generate JWT
        const token = await generateJWT(user.id);
        res.json({
            user,
            token
        });

    } catch (error) {
        return res.status(500).json({
            msg: "¡Hoooops! error server.",
        });
    }


}

const userAuth = async (req, res = response) => {
    res.json({user: req.user})
}


module.exports = {
    login,
    insertUser,
    userAuth,
    userById
}