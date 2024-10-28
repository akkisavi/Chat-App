import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn:'7d'
    })

    res.cookie("jwt_token",token,{
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        path: '/',
        secure: process.env.NODE_ENV === 'development'
    });
};

export default generateTokenAndSetCookie;