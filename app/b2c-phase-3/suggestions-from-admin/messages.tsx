"use client";
import React, { useState } from "react";
import { Download } from "lucide-react";
import { FaRegFile } from "react-icons/fa";
const ChatInterface = () => {
  const [messages] = useState([
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "8:50 pm",
      isUser: true,
      type: "text",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "8:50 pm",
      isUser: true,
      type: "file",
      fileName: "File Name",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: "8:50 pm",
      isUser: false,
      type: "image",
      imageUrl:
        "/phase-3/earth.jpg",
    },
  ]);

  const MessageBubble = ({ message }) => {
    const { isUser, text, timestamp, type, fileName, imageUrl } = message;

    return (
      <div
        className={`flex mb-3 sm:mb-4 ${
          isUser ? "justify-end" : "justify-start"
        }`}
      >
        <div
          className={`max-w-[70%] sm:max-w-[60%] w-auto px-3 py-2 rounded-xl shadow sm:px-4 sm:py-3 sm:rounded-2xl ${
            isUser ? "bg-[#3366FF] text-white" : "bg-[#F9FAFB] text-black"
          }`}
        >
          {/* Text Message */}
          {text && (
            <div
              className={`flex gap-1.5 relative ${
                isUser ? "flex-row-reverse" : ""
              }`}
            >
              <p
                className={`text-sm font-light break-words sm:text-lg ${
                  isUser ? "text-right sm:pl-6" : "sm:pr-8"
                }`}
              >
                {text}
              </p>
              <p
                className={`absolute tracking-tight text-[7px] font-normal flex items-center whitespace-nowrap mt-auto sm:text-[8px] ${
                  isUser
                    ? "text-white/85 left-0 bottom-0"
                    : "text-[#6B7280] right-0 bottom-0 sm:bottom-1/2 sm:translate-y-1/2"
                }`}
              >
                {timestamp}
              </p>
            </div>
          )}

          {/* Image Message */}
          {type === "image" && imageUrl && (
            <div className="mt-2 sm:mt-4">
              <img
                src={imageUrl}
                alt="Chat image"
                className="w-full max-h-32 rounded-xl object-cover sm:max-h-40 md:max-h-[200px] sm:rounded-2xl"
              />
              <div className="flex items-center justify-end mt-1 sm:mt-2">
                <button className="flex items-center text-black gap-1 text-[10px] bg-[#B0B0B033] hover:text-blue-600 p-2 rounded-full justify-center sm:text-xs sm:gap-1.5 sm:p-3">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          )}

          {/* File Message */}
          {type === "file" && fileName && (
            <div className="mt-2 sm:mt-4">
              <div className="flex  flex-col items-center bg-white rounded-2xl px-3 py-3">
                <div className="flex w-full justify-between items-center">
                  <p className="text-xs sm:text-sm mb-1 text-black dark:text-white">
                    {fileName}
                  </p>
                  <div className="w-5 h-5 text-black">
                    <FaRegFile />
                  </div>
                </div>
                <button className="text-xs text-[#6b7280]  rounded-full w-full p-2 sm:text-sm bg-[#6b7280]/10">
                  Download
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="p-4 space-y-4 min-h-[400px]">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>
    </div>
  );
};

export default ChatInterface;
