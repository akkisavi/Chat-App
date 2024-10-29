import { MdOutlineGroups2 } from "react-icons/md";
import GenderSelect from "./gender.jsx"
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup.js";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPassword:'',
        gender:''
    })

    // eslint-disable-next-line no-unused-vars
    const {loading, signup} = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs)
    }

    const handleGenderSelect = (gender) => {
        setInputs({...inputs, gender})
    }


  return (
    //-------------------------Title--------------------------------------
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className = " w-full p-6  bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
      <h1 className="text-3xl font-semibold text-center text-white">
          SignUp
          <span className="text-blue-500"> ChatNest</span> <span className="mt-[-5px] inline-block align-middle text-4xl"><MdOutlineGroups2/></span>
      </h1>

    {/* -------------------------Fullname input-------------------------------------- */}
     <form onSubmit={handleSubmit}>
        <div>
              <label className="label p-2"> 
                  <span className="text-lg label-text text-white ">Full Name</span>
              </label>
                  <input type ="text" 
                  placeholder="Spongebob Squarepants" 
                  value={inputs.fullName} 
                  onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                  className="max-w-xs w-full input input-bordered h-10 focus:border-zinc-400 focus:outline-none bg-white text-gray-600">
                  </input>
        </div>

    {/* -------------------------username input-------------------------------------- */}
       <div>
          <label className="label p-2"> 
              <span className="text-lg label-text text-white ">Username</span>
          </label>
              <input type ="text" 
              placeholder="Spongebob" 
              value={inputs.username} 
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
              className="max-w-xs w-full input input-bordered h-10 focus:border-zinc-400 focus:outline-none bg-white text-gray-600"></input>
      </div>

      {/* -------------------------Password input-------------------------------------- */}
      <div>
          <label className="label">
              <span className="text-lg label-text text-white ">Password</span>
          </label>
          <input type="password" 
          placeholder="Enter your password"
          value={inputs.password} 
          onChange={(e) => setInputs({...inputs, password: e.target.value})}
          className="max-w-xs w-full input input-bordered h-10 focus:border-zinc-400 focus:outline-none bg-white text-gray-600"/>
      </div>
      <div>
          <label className="label">
              <span className="text-lg label-text text-white ">Confirm Password</span>
          </label>
          <input type="password" 
          placeholder="Enter your password again"
          value={inputs.confirmPassword} 
          onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
          className="max-w-xs w-full input input-bordered h-10 focus:border-zinc-400 focus:outline-none bg-white text-gray-600"/>
      </div>

      <GenderSelect onCheckboxChange={handleGenderSelect} selectedGender = {inputs.gender}/>

      <Link to="/login" className=" text-white text-sm hover:underline hover:text-blue-500 mt-2 inline-block">
          Already have an account?
      </Link>
      <div>
    {/* -------------------------Signup Button-------------------------------------- */}
      <button type="submit" className="btn bg-white text-blue-500 hover:bg-gray-200 mt-3 min-w-80 border-none" disabled={loading}>
        {loading ? <span className="loading loading-spinner bg-white"></span> : "Sign Up"}</button>
      </div>
     </form>   
    </div>
  </div> 
  )
}

export default SignUp
