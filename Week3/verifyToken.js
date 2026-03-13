import jwt from "jsonwebtoken"
const {verify} = jwt

export function verifyToken(req,res,next){
    // Token verification logic
    const token = req.cookies?.token // SignedToken - token name that we've gave while creating POST route.
    // if request from unauthorised user then token is undefined
    if(!token){
        return res.status(401).json({message : "Please Login to the application"})
    }
    // If token exists 
    // Verify whether the token is expired or not.
    // verify() method returns error if the token is invalid otherwise returns the decoded token.
    try{
        const decodedToken = verify(token,process.env.SECRET_KEY)
        // if error not occured call next()
        req.user=decodedToken
        next()
    }
    catch(err){
        res.status(401).json("Session expired. Please relogin!")
    }
}
// This token should be executed only for specific route.