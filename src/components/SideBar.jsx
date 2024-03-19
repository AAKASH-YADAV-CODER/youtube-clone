import React from 'react'
import { categories } from "../utilities/constant.jsx"
import { useSelector } from 'react-redux'
const SideBar = () => {
    const open=useSelector(state=>state.ui.toggle)
  return (
      <div className=' bg-gray-400 overflow-y-scroll overflow-x-hidden h-[calc(100vh)]'>
          <ul className={` ${open?"ml-4 mx-10 text-l space-y-7":"hidden"} `}>
              {categories.map((ele,i)=>{
                  return (
                      <li key={i} className='flex justify-start space-x-6 items-center '>
                          <span className='text-xl'>{ele.icon}</span>
                          <span className={`${open?"":"hidden"}`} >{ele.name}</span>
                      </li>
                  )
              })}
          </ul>
    </div>
  )
}

export default SideBar