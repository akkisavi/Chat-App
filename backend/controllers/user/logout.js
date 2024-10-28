const userLogout = (req, res) => {
    try {

        //------------------Clearing all the cookies after logging out---------------------0
        res.cookie("jwt_token", "", {
            maxAge: 0,
            path: '/', 
            secure: process.env.NODE_ENV === 'production' 
        });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout in the user", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default userLogout;