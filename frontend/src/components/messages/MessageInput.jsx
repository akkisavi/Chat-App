import { AiOutlineSend } from "react-icons/ai";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
        <div className="w-full relative">
            <input type="text" className="focus:outline-none focus:ring-2 focus:ring-white focus:border-blue-500 border text-sm rounded-lg block w-full p-2.5 bg-blue-500 border-blue-400 text-white placeholder-white" 
            placeholder="Enter your message"/>
            <button type="submit" className="text-2xl absolute inset-y-0 end-2 flex items-center ps-3 text-white">
            <AiOutlineSend />
            </button>
        </div>
    </form>
  )
}

export default MessageInput
