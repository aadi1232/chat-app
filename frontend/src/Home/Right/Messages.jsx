import React, { useEffect, useRef } from "react";
import useGetMessage from "../../context/useGetMessage.jsx";
import Loading from "../../components/Loading.jsx";
import Message from "./Message.jsx"; // Renamed to avoid confusion

function Messages() {
  const { messages, loading } = useGetMessage();
  console.log(messages);

  const lastMessageref = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMessageref.current) {
        lastMessageref.current?.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  }, [messages]);

  return (
    <>
      <div style={{ minHeight: "calc(92vh - 10vh)" }} className="">
        {loading ? (
          <Loading />
        ) : (
          messages.length > 0 &&
          messages.map((message) => {
            return <Message key={message._id} message={message} />;
          })
        )}
        {!loading && messages.length === 0 && (
          <div>
            <p className="flex text-center justify-center text-3xl text-blue-300 m-[30%] font-bold font-sans">
              Say Hi to Start Chatting
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Messages;
