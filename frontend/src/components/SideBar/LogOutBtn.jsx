import { CiLogout } from "react-icons/ci";
import Logout from "../../hooks/Logout";

const LogOutBtn = () => {

  const {loading, logout} = Logout();

  return (

    <div className="mt-auto">
      { !loading ? (<CiLogout className=" text-white text-2xl w-6 h-6 cursor-pointer" 
        onClick={logout}/> ): <span className="laoding loading-spinner"></span>
      }
      
    </div>
  )
}

export default LogOutBtn
