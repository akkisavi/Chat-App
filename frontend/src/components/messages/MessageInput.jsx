import { AiOutlineSend } from "react-icons/ai";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const{loading, sendMessage} = useSendMessage();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
        if(!message) return;
          await sendMessage(message);
          setMessage("");
  }

  return ( 
    <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
            <input type="text" 
                className="focus:outline-none focus:ring-2 focus:ring-white focus:border-blue-500 border text-sm rounded-lg block w-full p-2.5 bg-blue-500 border-blue-400 text-white placeholder-white" 
                placeholder="Enter your message"    
                value={message} 
                onChange={(e) => setMessage(e.target.value)}/>
            <button type="submit" className="text-2xl absolute inset-y-0 end-2 flex items-center ps-3 text-white">
              {loading ?  <div className="laoding loading-spinner"></div> : <AiOutlineSend />}
            </button>
        </div>
    </form>
  )
}

export default MessageInput
