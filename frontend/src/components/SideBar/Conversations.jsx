import Conversation from "./Conversation";
import useGetConversations from "../../hooks/getConversations";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return ( 
    <div className="py-2 flex flex-col overflow-auto overflow-y-scroll no-scrollbar ">
      {conversations.map((conversation, idx) => {
        return (  
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
          />
        );
      })}

      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
