import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;
        
        const allUsers = await User.find({_id: { $ne: loggedInUserId }}).select("-password"); // $ne denotes that it will return all users except us in sidebar

        res.status(200).json(allUsers);

    } catch (error) {
        console.log("Error in getting sidebar", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}