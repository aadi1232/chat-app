import React from "react";

function Message({ message }) {

   const autUser = JSON.parse(localStorage.getItem("messenger"));
    const itsme = message.senderId === autUser.user._id;
   const chatName = itsme?"chat-end":"chat-start";
   const chatColor = itsme?"bg-blue-400":"";

  return (
    <>
    <div className="p-4">
    <div className={`chat ${chatName}`}>
        <div className={`chat-bubble text-white ${chatColor}`}>
          {message.message}
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Message;
