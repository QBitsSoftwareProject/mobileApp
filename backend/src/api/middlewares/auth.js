const jwt = require("jsonwebtoken")
const { TOKEN_KEY } = require('../../config/env')

function verifyToken(req,res,next){
    const token = req.headers["authtoken"];
    

    if (!token) {
        
        return res.status(403).send("A token is required for authentication");
        
    }
    try {
        const decoded = jwt.verify(token, TOKEN_KEY);
        req.user = decoded;
        next();
        
    } catch (err) {
        res.status(401).send("Invalid Token");
        
    }
    
}

module.exports = verifyToken;