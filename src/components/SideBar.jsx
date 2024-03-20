import React from 'react'
import { categories } from "../utilities/constant.jsx"
import { useSelector } from 'react-redux'
const SideBar = () => {
    const open=useSelector(state=>state.ui.toggle)
  return (
      <div className={`${open?"w-[20%]":"w-[10%]"} bg-gray-400 overflow-y-scroll overflow-x-hidden h-[calc(100vh)]`}>
          <ul className="ml-4 text-l space-y-3">
              {categories.map((ele,i)=>{
                  return (
                      <li key={i} className='flex justify-start gap-3 items-center pt-3'>
                          <span className={`${open?'text-l':'text-2xl'}`}>{ele.icon}</span>
                          <span className={`${open?"":"hidden"}`} >{ele.name}</span>
                      </li>
                  )
              })}
          </ul>
    </div>
  )
}

export default SideBar