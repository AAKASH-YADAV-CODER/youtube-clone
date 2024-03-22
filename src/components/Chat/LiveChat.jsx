import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useSelector ,useDispatch} from "react-redux";
import { setMessageData } from '../../store/chat-slice.jsx';
import { generateRandomName, generateRandomMessage } from '../../utilities/helper.jsx';

const LiveChat = () => {
    const {chatData} = useSelector((store) => store.chat);
    const dispatch = useDispatch();
    // useEffect(()=>{
    //    const timer = setInterval(()=>{
    //         dispatch(setMessage({name:generateRandomName(), message:generateRandomMessage(16)}));
    //     },1000)

    //     return(()=>{
    //         clearInterval(timer)
    //     })
        
    // },[])
    useEffect(() => {
        const timer = setInterval(() => {
            const data = {
                name: generateRandomName(),
                message: generateRandomMessage(16)
            }
            dispatch(setMessageData(data))
        }, 1000);
        return (() => {
            clearInterval(timer);
        })
    },[])
    return (
        <div className='pl-4 py-1'>
            <div>
                {
                    chatData.map((item,idx) => {
                        return (
                            <ChatMessage key={idx} item={item}/>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default LiveChat