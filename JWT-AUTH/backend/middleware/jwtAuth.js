const JWT= require("jsonwebtoken");

const jwtAuth= (req,res,next) =>{
    //    getting the jwt token through middleware
    const token=(req.cookies && req.cookies.token) || null;
 
    // if token doesnot exist
    if(!token) {
        return res.status(400).json({
            success:false,
            message:"Not authorized(Token doesn't exists)"
        })
    }

    try {
        const payload= JWT.verify(token, process.env.SECRET);
        req.user={id:payload.id, email: payload.email};
    } catch(e){
       return res.status(400).json({
        success:false,
        message:e.message
       })
    }

    next();
}

module.exports=jwtAuth;