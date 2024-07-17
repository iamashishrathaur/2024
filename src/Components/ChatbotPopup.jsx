import React, { useState } from 'react';
import ChatBot from './ChatBot';
import Chat from './Chat';

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{type: 'text', text: 'Hi there!', sender: 'other', status:new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}]);

  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: 'text', sender:'me',status:'sending...'}]);
      setInput('');
    }
  };


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMessages([...messages, { text: reader.result, type: 'image',sender:'me', status:'sending...'}]);
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
            <Chat key={messages} messages={messages}/>
          </div>
          <div className="p-4 w-full flex items-center justify-center">
            <div className='flex w-full items-center p-2 border border-gray-300 rounded-3xl'>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="imageUpload"/>
              <label htmlFor="imageUpload" className="pl-2 pr-4 cursor-pointer">
                <i className="fa fa-paperclip text-gray-500"></i>
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
const messages = [
  { type: 'text', text: 'Hello!', sender: 'other' },
  { type: 'text', text: 'Hi there!', sender: 'me' },
  { type: 'text', text: 'hello how are you', sender: 'me' },
  // Add more messages here...
];

export default ChatbotPopup;
