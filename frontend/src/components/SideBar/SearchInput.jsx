import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from "../../hooks/getConversations.js";
import useConversation from "../../store/useConversation.js";
import toast from "react-hot-toast";

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const {setSelectedConversation} = useConversation();
    const { conversations } = useGetConversations()

    const handleSubmit = (e) => {
      e.preventDefault();
      if(!search){
        return;
      }else if(search.length < 3 ){
        toast.error("Search must be atleast 3 character long")
      }

      const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

      if(conversation){
        setSelectedConversation(conversation);
        setSearch("")
      }else{
          toast.error("No such user found")
        }
    }
    
  return (
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input type="text" 
            placeholder="Search" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full max-w-xs bg-white  text-gray-600" />
            <button className="btn btn-circle bg-blue-500 text-3xl text-white border-none hover:bg-blue-700"><IoSearchSharp/></button>
        </form>
  )
} 

export default SearchInput
