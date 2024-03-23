import React,{ useRef} from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from "./LiveChat.jsx";
import { useDispatch } from 'react-redux';
import { setMessageData } from '../../store/chat-slice.jsx';
const ChatLayout = () => {
    const textInput = useRef(null);
    const dispatch = useDispatch();
    const sendMessageHandler = () => {
        const inputValue = textInput.current.value;
        if (inputValue === "") {
            return;
        }
        dispatch(setMessageData({name:"Aakash Yadav",message:inputValue}))
        textInput.current.value = '';
    }
    return (
        <div className='border border-gray-300 ml-2 rounded-lg h-fit p-4 '>
            <div className='flex justify-between items-center'>
                <h1>Top Chat</h1>
                <BsThreeDotsVertical />
            </div>
            <div className='overflow-y-auto h-[28rem] flex flex-col-reverse'>
                <LiveChat />
            </div>

            <div className='flex items-center justify-between border-t p-2'>
                <div className='flex items-center'>
                    <div>
                        <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" className='w-7 h-7 rounded-full'/>
                    </div>
                    <input ref={textInput} className='dark:bg-slate-900 border-b border-gray-300 outline-none ml-2' type="text" placeholder='Send message...' />
                    <div className='bg-gray-200 cursor-pointer p-2 rounded-full ml-6'>
                        <LuSendHorizonal onClick={sendMessageHandler} className='dark:text-black'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatLayout