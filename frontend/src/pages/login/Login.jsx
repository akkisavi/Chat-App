import { MdOutlineGroups2 } from "react-icons/md";

const Login = () => {
  return (
    //------------------------------Title-----------------------------------
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className = " w-full p-6  bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
        <h1 className="text-3xl font-semibold text-center text-white">
            Login
            <span className="text-blue-500"> ChatNest</span> <span className="mt-[-5px] inline-block align-middle text-4xl"><MdOutlineGroups2/></span>
        </h1>
      
    {/* -------------------------Username input-------------------------------------- */}
       <form>
         <div>
            <label className="label p-2"> 
                <span className="text-lg label-text text-white ">Username</span>
            </label>
                <input type ="text" placeholder="Enter your username" className="max-w-xs w-full input input-bordered h-10 focus:border-zinc-400 focus:outline-none bg-white text-gray-600"></input>
        </div>
        {/* -------------------------Password input-------------------------------------- */}
        <div>
            <label className="label">
                <span className="text-lg label-text text-white ">Password</span>
            </label>
            <input type="password" placeholder="Enter your password"
            className="max-w-xs w-full input input-bordered h-10 focus:border-zinc-400 focus:outline-none bg-white text-gray-600"/>
        </div>
        <a href="#" className=" text-white text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
            {"Don't"} have an account?
        </a>
        <div>
          {/* -------------------------Login Button-------------------------------------- */}
        <button className="btn bg-white text-blue-500 hover:bg-gray-200 mt-3 min-w-80 border-none">Login</button>
        </div>
       </form>   
      </div>
    </div> 
  )
}

export default Login
