import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSolidCameraMovie } from "react-icons/bi";
import { RiSearch2Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../store/ui-slice.jsx';
const NavBar = () => {
    const dispatch = useDispatch();
    const toggleHandler = () => {
        dispatch(toggleMenu())
    }
    return (
        <header className='fixed justify-between w-full  top-0 z-50'>
            <ul className='flex justify-between py-1 bg-yellow-400 h-[65px]'>
                <li className='flex gap-2 ml-4 my-3 cursor-pointer'>
                    <RxHamburgerMenu size={"24px"} onClick={toggleHandler}/>
                    <img src='/images/yt-logo.png' className='h-6' />
                </li>
                <li className='flex w-[40%] m-2'>
                    <div className='border border-gray-800 rounded-l-3xl w-full '>
                        <input type='text' className='outline-none w-full m-2 bg-transparent' placeholder='Search...' />
                    </div>
                    <button className='rounded-r-3xl border border-gray-800 px-4 bg-slate-300 '><RiSearch2Line />
                    </button>
                </li>
                <li className='flex gap-4 mr-4 my-3'>
                    <IoMdNotificationsOutline size={"24px"} className='cursor-pointer'/>
                    <BiSolidCameraMovie size={"24px"} className='cursor-pointer'/>
                    <img src='/images/new.png' className='h-7 w-8 rounded-[50%] cursor-pointer' />
                </li>
            </ul>
        </header>
    )
}

export default NavBar