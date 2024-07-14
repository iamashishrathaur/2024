import React from 'react';
import ChatBotImg from '../assets/chat_bot.png';

const ChatBot = ({ setOpenChat }) => {
  return (
    <div
      className="fixed bottom-24 right-5 z-50 w-20 h-20 cursor-pointer"
      onClick={() => setOpenChat(true)}
    >
      <img src={ChatBotImg} width={100} alt="Chat Bot" className="z-[9999]" />
    </div>
  );
};

export default ChatBot;
