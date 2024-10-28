import User from "../../models/user.model.js";
import bcryptjs from "bcryptjs";
import generateTokenAndSetCookie from "../../utils/generateToken.js";

const newSignup = async(req,res) => {
    try {
        let {fullName, username, password, confirmPassword, gender}= req.body;

        //----------------------------Checking Passwords are matching or not---------------------------
        if(password !== confirmPassword){
            return res.status(400).json({error:"Password do not match"})
        }

        const user = await User.findOne({username});

        //----------------------------Checking if username already exists------------------------------
        if(user){
            return res.status(400).json({error:"Username Taken"})
        }

        //----------------------------Hash Password Creation----------------------------
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        //----------------------------ProfilePic----------------------------
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        //----------------------------Creating new users----------------------------
        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic: gender = "male" ? boyProfilePic : girlProfilePic
        })

        if(newUser){

            generateTokenAndSetCookie(newUser._id, res);  //----Generating JWT TOKEN--------
            await newUser.save();   //----Saving New User----

            res.status(201).json({
                _id: newUser._id,
                fullName : newUser.fullName,
                username : newUser.username,
                profilePic : newUser.profilePic
            });
        }
           else{
            res.status(400).json({error: "Invalid user data"});
        }
        

    } catch (error) {
        console.log("Error in signup the user", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};

export default newSignup