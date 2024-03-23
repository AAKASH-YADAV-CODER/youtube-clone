import React from 'react'
import { categories } from "../utilities/constant.jsx"
import { useSelector } from 'react-redux'
const SideBar = () => {
    const open=useSelector(state=>state.ui.toggle)
  return (
      <div className={`sm:${open?"w-[20%]":"w-[5%]"} bg-white overflow-y-scroll overflow-x-hidden h-[calc(100vh)] dark:bg-slate-900 dark:text-white pr-5`}>
          <ul className="ml-4 text-l space-y-3">
              {categories.map((ele,i)=>{
                  return (
                      <li key={i} className='flex justify-start gap-3 items-center pt-3'>
                          <span className={`${open?'text-l':'text-2xl mr-4'}`}>{ele.icon}</span>
                          <span className={`${open?"mr-3":"hidden"}`} >{ele.name}</span>
                      </li>
                  )
              })}
          </ul>
    </div>
  )
}

export default SideBar