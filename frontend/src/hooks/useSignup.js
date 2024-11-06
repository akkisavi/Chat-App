import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext.jsx";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser} = useAuthContext();

 const signup = async({fullName, username, password, confirmPassword, gender}) => {
    const checking = handleInputs({fullName, username, password, confirmPassword, gender});

    if(!checking){
        return
    }
    setLoading(true)
    try {
        const res = await fetch("/api/auth/signup",{
            method:"POST",
            headers:{"Content-Type" : `application/json`},
            body : JSON.stringify({fullName, username, password, confirmPassword, gender})
        })

        

          // Checking if the response indicates success or failure
          if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || "Signup failed");
        }
        const data = await res.json();
        console.log(data);
        toast.success('Signed in Succesfully')

        localStorage.setItem("user-info",JSON.stringify(data))
        setAuthUser(data);


    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false)
        
    }
 }
 return {loading, signup}
}

export default useSignup

function handleInputs({fullName, username, password, confirmPassword, gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill all the fields")
        return false
    }
    if(password !== confirmPassword){
        toast.error("Passwords do not match")
        return false
    }
    if(password.length < 8){
        toast.error("Password must be minimun 8 character")
        return false
    }
    return true;
}
