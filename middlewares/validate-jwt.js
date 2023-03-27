const {response, request} = require('express');
const jwt = require("jsonwebtoken");
const User = require('../models/user');

const validateJWT = async (req = request, res= response, next ) =>{
    const token =  req.header('x-token');
    if(!token){
        return res.status(401).json({
            msg: "Not found token"
        })
    }

    try{
        const  {uid}  = jwt.verify(token, process.env.SECRETPRIVATEKEY);

        // read if the user is authenticated
        const user = await  User.findById(uid);
        if(!user){
            return res.status(401).json({
                msg: "Token no validate"
            })
        }

        // Verify uid state true
        if(!user.state){
            return res.status(401).json({
                msg: "Token no validate or state user inactive"
            })
        }

        req.user = user;
        next();
    }catch (error){
        console.error(error);
        res.status(401).json({
            msg: "Token not validate"
        })
    }

}
module.exports = {
    validateJWT
};