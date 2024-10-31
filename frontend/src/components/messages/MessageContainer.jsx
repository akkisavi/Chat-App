import { useEffect } from "react";
import useConversation from "../../store/useConversation.js";
import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";
import { LuMessagesSquare } from "react-icons/lu";  

const MessageContainer = () => {

    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(()=>{

        return() => {
            setSelectedConversation(null)
        }
    },[setSelectedConversation])

    return (
    <div className="md:min-w-[450px] flex flex-col">
        {!selectedConversation ? <NoChatSelected/> : (<>
        <div className="bg-blue-500 px-4 py-2 mb-2 ">
            <span className="label-text text-white">To: </span><span className="text-white font-bold">{selectedConversation.fullName}</span>
        </div>

        <Messages/>
        <MessageInput/>
        
        </>)}

    </div>
  )
}

export default MessageContainer

const NoChatSelected = () => {

    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-white font-semibold felx felx-col items-center gap-2">
                <p>Welcome 👋</p>
                <p>Select a chat to start messaging 😉</p>
                <LuMessagesSquare className="text-3xl md:text-6xl mx-auto mt-2"/>
            </div>
        </div>
    );
};