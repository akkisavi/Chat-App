import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext.jsx"
import useConversation from "../store/useConversation.js";
import notificationSound from "../asset/sounds/notification.mp3"

const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
        const sound = new Audio(notificationSound)
        sound.volume = 0.3;
        sound.play();
        setMessages([...messages, newMessage])
        })
    },[socket, setMessages, messages])

    return() => socket.off("newMessage")
}

export default useListenMessages
