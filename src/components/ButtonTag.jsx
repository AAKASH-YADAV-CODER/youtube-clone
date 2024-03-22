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
                    <li onClick={()=>{categoryHandler(ele)}} key={i} className={`rounded-xl border border-red-950 px-1 cursor-pointer drop-shadow-xl  ${activeButton===ele?'bg-black text-white shadow-2xl':''}`}>{ele}</li>
                )
            })
        }</ul>
    )
}

export default ButtonTag;