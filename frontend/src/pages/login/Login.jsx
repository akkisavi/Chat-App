import { useState } from "react";
import { MdOutlineGroups2 } from "react-icons/md";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const{loading, login} = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password)
  }
  
  return (
    //------------------------------Title-----------------------------------
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className = " w-full p-6  bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-white">
            Login
            <span className="text-blue-500"> ChatNest</span> <span className="mt-[-5px] inline-block align-middle text-4xl"><MdOutlineGroups2/></span>
        </h1>
      
    {/* -------------------------Username input-------------------------------------- */}
       <form onSubmit={handleSubmit}>
         <div>
            <label className="label p-2"> 
                <span className="text-lg label-text text-white ">Username</span>
            </label>
                <input type ="text" 
                placeholder="Enter your username" 
                value = {username}
                onChange={(e) => setUsername(e.target.value)}
                className="max-w-xs w-full input input-bordered h-10 focus:border-zinc-400 focus:outline-none bg-white text-gray-600"></input>
        </div>
        {/* -------------------------Password input-------------------------------------- */}
        <div>
            <label className="label">
                <span className="text-lg label-text text-white ">Password</span>
            </label>
            <input type="password" 
            placeholder="Enter your password"
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            className="max-w-xs w-full input input-bordered h-10 focus:border-zinc-400 focus:outline-none bg-white text-gray-600"/>
        </div>
        <Link to="/signup" className=" text-white text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
            {"Don't"} have an account?
        </Link>
        <div>
          {/* -------------------------Login Button-------------------------------------- */}
        <button className="btn bg-white text-blue-500 hover:bg-gray-200 mt-3 min-w-80 border-none" disabled={loading}>
          {loading ? <span className="loading loading-spinner bg-white"></span>: "Login"}
        </button>
        </div>
       </form>   
      </div>
    </div> 
  )
}

export default Login
