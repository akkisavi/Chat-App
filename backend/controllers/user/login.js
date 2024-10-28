import User from "../../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../../utils/generateToken.js";

const userLogin = async(req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcryptjs.compare(password, user?.password || "");

        //--------------------------Checking user and password are correct or not------------------------------
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Invalid username or password"})
        }
        
        //--------------------------Generating cookie for login user--------------------------------------
        generateTokenAndSetCookie(user._id, res);

        //------------------------------Returning user data after successful login---------------------------
        res.status(200).json({
            _id: user._id,
            fullName : user.fullName,
            username : user.username,
            profilePic : user.profilePic
        });


    } catch (error) {
        console.log("Error in logging in the user", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
    
}
export default userLogin