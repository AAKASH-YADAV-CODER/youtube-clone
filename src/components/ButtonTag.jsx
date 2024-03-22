import React from 'react'
import { TagsButtonConstant } from '../utilities/constant.jsx'
const ButtonTag = () => {
  return (
      <ul className='flex gap-7 m-4 overflow-x-auto no-scrollbar' style={{ whiteSpace: 'nowrap' }}>{
          TagsButtonConstant.map((ele, i) => {
              return (
                  <li key={i} className='bg-red-400  rounded-xl border border-red-950 px-1 cursor-pointer drop-shadow-xl hover:bg-transparent '>{ele}</li>
          )
      })
      }</ul>
  )
}

export default ButtonTag;