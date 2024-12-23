import { useAuthContext } from '../../context/AuthContext.jsx'
import useConversation from '../../store/useConversation'
import {extractTime} from '../../utils/extractTime.js'

const Message = ({message}) => {
  const {authUser} = useAuthContext()
  const {selectedConversation}= useConversation() 
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe? 'chat-end' : 'chat-start';
  const profilePic = fromMe? authUser.profilePic : selectedConversation?.profilePic;
  const messageBgColor = fromMe? 'bg-blue-500' : 'bg-yellow-500';
  const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component"
                     src={profilePic} />
            </div>
        </div>
      <div className={`chat-bubble text-white bg- ${messageBgColor}`}>{message.message}</div>
      <div className="chat-footer opacity-60 text-xs flex gap-1 item-center text-white">{formattedTime}</div>
    </div>
  )
}

export default Message
