const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req,res,next)=>{
    let token = req.headers.authorization?.split(" ")[1];
    if(token){
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            req.body.userID = decoded.userID;
            req.body.username = decoded.username;
            next();
        });
    }
    else{
        res.status(401).json({message:"token not found!"});
    }
}

module.exports = authMiddleware;