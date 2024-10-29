
const Message = () => {
  return (
    <div className="chat chat-end">
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img alt="Tailwind CSS chat bubble component"
                     src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
        </div>
      <div className="chat-bubble text-white bg-blue-500">Hii What is up?</div>
      <div className="chat-footer opacity-60 text-xs flex gap-1 item-center text-white">10:00</div>
    </div>
  )
}

export default Message
