import React, { useState } from 'react';
import ChatBot from './ChatBot';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: 'text' }]);
      setInput('');
    }
  };

  const handleEmojiSelect = (emoji) => {
    setInput(input + emoji.native);
    setShowEmojiPicker(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMessages([...messages, { text: reader.result, type: 'image' }]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-[9999]">
      {isOpen ? (
        <div className="w-80 min-h-[450px] max-h-[550px] bg-white shadow-lg rounded-lg flex flex-col">
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
            {messages.map((message, index) => (
              <div key={index} className="mb-2">
                {message.type === 'text' ? (
                  <div className="bg-gray-200 p-2 rounded">{message.text}</div>
                ) : (
                  <img src={message.text} alt="Uploaded" className="max-w-full h-auto rounded" />
                )}
              </div>
            ))}
          </div>
          <div className="p-4 w-full flex items-center space-x-2">
            {showEmojiPicker && (
              <div className=' w-5'>
                <Picker
                data={data}
                onEmojiSelect={handleEmojiSelect}
                className="mr-2"
              />
              </div>
            )}
            <div className='flex items-center p-2 border border-gray-300 rounded'>
              <i className="fa-regular fa-face-smile px-1" onClick={() => setShowEmojiPicker(!showEmojiPicker)}></i>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="imageUpload"/>
              <label htmlFor="imageUpload" className="px-2 cursor-pointer">
                <i className="fa fa-paperclip"></i>
              </label>
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-grow outline-none border-none pr-1" placeholder="Type a message..." />
              <i className="fa-regular fa-paper-plane p-2 cursor-pointer" onClick={handleSendMessage}></i>
            </div>
          </div>
        </div>
      ) : (
        <ChatBot setOpenChat={setIsOpen} />
      )}
    </div>
  );
};

export default ChatbotPopup;
