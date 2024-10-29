import { useState } from "react"
import { useAuthContext } from "../components/context/authContext";
import toast from "react-hot-toast";

const Logout = () =>{
    const[loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:8000/api/auth/logout",{
                method:"POST",
                headers:{"Content-Type" : "application/json"}
            });
            const data = await res.json()
            if(data.error){
                throw new Error(data.error)        
            }
        localStorage.removeItem("user-info");
        setAuthUser(null);

        } catch (error) {
            toast.error(error.message)
        }
        finally{
            setLoading(false)
        }
    };
    return{loading, logout};
};

export default Logout