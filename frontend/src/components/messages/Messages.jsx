import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages.js';
import MessageSkeleton from '../skeleton/skeleton.jsx';
import Message from './Message.jsx';
import useListenMessages from '../../hooks/useListenMessages.js';

const Messages = () => {
  const {messages, loading} = useGetMessages();
  const lastMessageRef = useRef();
  useListenMessages();
  
  useEffect(() => {
    setTimeout(()=>{ 
    lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    },100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-y-scroll no-scrollbar">
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
        <Message message = {message} />
        </div>
      ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 &&(
        <p className='text-center text-white pt-4'>Send a message to start conversation</p>
      )}

    </div>
  )
}

export default Messages
