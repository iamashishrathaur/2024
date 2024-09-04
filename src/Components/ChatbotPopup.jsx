import React, { useEffect, useRef, useState } from 'react';
import ChatBot from './ChatBot';
import Chat from './Chat';
import 'boxicons'
import avatarImg from '../assets/avatar.webp'

const ChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const [messages, setMessages] = useState([{type: 'text', text: 'Hi there! how are you ?', sender: 'other', status:new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}]);

  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: 'text', sender:'me',status:'sending...'}]);
      setInput('');
    }
  };
  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
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

  useEffect(()=>{
    messagesEndRef.current?.scrollIntoView();
  },[messages])

  return (
    <div className="fixed bottom-24 right-4 z-[9999]">
      {isOpen ? (
        <div className={`w-[350px] h-[550px] bg-white border-[2px] rounded-[20px] overflow-hidden flex flex-col shadow-md`}>  {/*bg-white shadow-lg  flex flex-col*/}
          <div className='h-[90px] bg-[#0f0f20] flex items-center justify-between text-white p-4'>
            <div className='flex items-center pl-6'>
              <img src={avatarImg} alt='' className='h-[60px] border-[2px] bg-white rounded-full'></img>
                <div className='ml-[10px]'>
                  <h3 className='text-base'>Jason Roy</h3>
                  <p className='text-xs'>Agent <span className='text-[#0f0]'> (Online)</span></p>
                </div>        
              </div>
             <div className='cursor-pointer' onClick={() => setIsOpen(false)}> <box-icon name='x' color='white' size='40px'></box-icon></div>
          </div>

          <div className="flex-grow p-3 overflow-auto">
            <Chat key={messages} messages={messages}/>
            <div ref={messagesEndRef}></div>
          </div>
          <div className="px-4 pb-4 bt-1 w-full min-h-16 flex items-center justify-center">
            <div className='flex w-full h-full items-center p-2 border-[2px] border-gray-300 rounded-3xl justify-between'>
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="imageUpload" spellCheck="true"/>
              <label htmlFor="imageUpload" className="px-2 cursor-pointer">
                <i className="fa fa-paperclip text-gray-500"></i>
              </label>
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyUp={handleKeyUp} className="flex flex-grow outline-none border-none" placeholder="Type a message..." />
              <div className='cursor-pointer flex px-2'><box-icon name='send' color='rgb(107 114 128)' size='22px' style={{ color: 'blue',}}  onClick={handleSendMessage}></box-icon></div>
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
