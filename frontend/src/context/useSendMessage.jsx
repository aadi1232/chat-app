import React, { useState } from "react";
import useConversation from "../stateManage/useConversation.jsx";
import axios from "axios";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  // Define the `sendMessages` function, but do not call it immediately
  const sendMessages = async (message) => {
    if (!selectedConversation || !selectedConversation._id) return;

    setLoading(true);
    try {
       const response = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );

      // Update messages correctly
      setMessages([...messages, ...(response.data.messages || [])]);
    } catch (error) {
      console.error("Error in useSendMessage:", error);
    } finally {
      setLoading(false);
    }
  };

  // Return the loading state and the function
  return {
    loading,
    sendMessages,
  };
}

export default useSendMessage;
