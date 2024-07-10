import ChatBotImg from '../assets/chat_bot.png'
const ChatBot = () => {
  return (
    <div className='fixed bottom-24 right-5 z-50 w-20 h-20'>
        <img src={ChatBotImg} width={100} alt="" className=' z-[9999] cursor-pointer'/>
    </div>
  )
}

export default ChatBot