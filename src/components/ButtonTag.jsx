import React from 'react'
import { TagsButtonConstant } from '../utilities/constant.jsx'
import { videoAction } from '../store/video-slice.jsx';
import { useDispatch,useSelector } from 'react-redux';
const ButtonTag = () => {
    const dispatch = useDispatch();
    const {activeButton}=useSelector((store)=>store.video)
    const categoryHandler = (tag) => {
        if (activeButton !== tag ) {
            dispatch(videoAction.setActiveButton(tag))
        }
    }
    return (
        <ul className='flex gap-7 m-4 overflow-x-auto no-scrollbar' style={{ whiteSpace: 'nowrap' }}>{
            TagsButtonConstant.map((ele, i) => {
                return (
                    <li onClick={()=>{categoryHandler(ele)}} key={i} className={`rounded-xl   px-1 cursor-pointer dark:border-white border border-neutral-900 ${activeButton===ele?'bg-black text-white drop-shadow-2xl dark:bg-white dark:text-black':''}`}>{ele}</li>
                )
            })
        }</ul>
    )
}

export default ButtonTag;