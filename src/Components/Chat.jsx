import { useEffect } from 'react';
import ImageWithModal from './ImageWithModal';
import { useRef } from 'react';

const Chat = ({ messages }) => {

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    console.log("this is");
    console.log(messagesEndRef.current);
    if (messagesEndRef.current) {
      console.log("ss");
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  return (
    <div className="w-full ">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-2 flex ${
            message.sender === 'me' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div className="flex flex-col items-end">
            <div
              className={`rounded-2xl max-w-xs font-[Arial] select-text ${
                message.sender === 'me' && message.type === 'text'
                  ? 'p-3 bg-blue-500 text-white'
                  : message.sender === 'other' && message.type === 'text'
                  ? 'p-3 bg-gray-200 text-black'
                  : ''
              }`}
            >
              {message.type === 'text' ? (
                message.text
              ) : (
                <ImageWithModal src={message.text} alt={Date.now()} />
              )}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {message.status}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chat;
