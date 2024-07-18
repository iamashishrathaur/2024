import ImageWithModal from './ImageWithModal';

const Chat = ({ messages }) => {

  return (
    <div className="w-full">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-3 flex ${
            message.sender === 'me' ? 'justify-end pl-12' : 'justify-start'
          }`}
        >
          <div className="flex flex-col items-end">
            <div className={`rounded-xl max-w-[270px] h-auto font-[Arial] select-text whitespace-pre-wrap break-words ${
                message.sender === 'me' && message.type === 'text'
                  ? 'p-[9px_20px] bg-[#0f0f20] text-white'
                  : message.sender === 'other' && message.type === 'text'
                  ? 'p-[9px_20px] bg-gray-200 text-black'
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
