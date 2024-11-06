import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../store/useConversation"

const Conversation = ({conversation,lastIdx}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

  return (<>
    <div className={` flex gap-2 items-center rounded p-2 py-1 cursor-pointer
                    ${isSelected ? "bg-blue-500" : "hover:bg-blue-400"} `}
                    onClick={()=> setSelectedConversation(conversation)}>

        <div className={`avatar ${isOnline ? "online" : ""}`}>
            <div className="w-12 rounded-full">
                <img src={conversation.profilePic} alt="user avatar"/>
            </div>
        </div>

        <div className="flex flex-col flex-1 ">
            <div className="flex gap-3 justify-between ">
                <p className="font-bold text-white ">{conversation.fullName}</p>
            </div>
        </div>
    </div>

    {!lastIdx && <div className="divider my-0 py-0 h-1"/>} 
    </>
  )
}

export default Conversation
