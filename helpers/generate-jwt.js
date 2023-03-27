const jwt = require("jsonwebtoken");

const generateJWT = (uid = '') => {
    return new Promise((resolve, reject) =>{
        const payload = {uid};

        jwt.sign(payload, process.env.SECRETPRIVATEKEY, {
            expiresIn: '2h'
        }, (error, token) => {
            if(error) {
                console.log(error);
                reject('Error in the token generator.')
            }else{
                resolve(token)
            }
        });

    });
}

module.exports = {
    generateJWT
}