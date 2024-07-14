import React, { useState } from 'react';
import ChatBot from './ChatBot';

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 right-4 z-[9999]">
      {isOpen ? (
        <div className="w-80 h-96 bg-white shadow-lg rounded-lg flex flex-col">
          <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-lg">
            <h3 className="text-lg">Chatbot</h3>
            <button
              className="text-white"
              onClick={() => setIsOpen(false)}
            >
              &#x2715;
            </button>
          </div>
          <div className="flex-grow p-4 overflow-auto">
            {/* Chatbot messages go here */}
          </div>
          <div className="p-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Type a message..."
            />
          </div>
        </div>
      ) : (
        <ChatBot setOpenChat={setIsOpen} />
      )}
    </div>
  );
};

export default ChatbotPopup;
