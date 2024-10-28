import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
        <form className="flex items-center gap-2">
            <input type="text" placeholder="Search" className="input input-bordered w-full max-w-xs bg-white  text-gray-600" />
            <button className="btn btn-circle bg-blue-600 text-3xl text-white border-none hover:bg-blue-800"><IoSearchSharp/></button>
        </form>
  )
}

export default SearchInput
