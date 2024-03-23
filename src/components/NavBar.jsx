import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiSolidCameraMovie } from "react-icons/bi";
import { RiSearch2Line } from "react-icons/ri";
import { useDispatch,useSelector } from 'react-redux';
import { toggleMenu } from '../store/ui-slice.jsx';
import { fetchSuggestionData,fetchDataFromTagButton } from '../utilities/api.jsx';
import { videoAction } from '../store/video-slice.jsx';
import { CiSearch } from "react-icons/ci";
import ThemeModel from './ThemeModel.jsx';

const NavBar = () => {
    const dispatch = useDispatch();
    const [inputText, setInputText] = useState('');
    const { suggestion } = useSelector(store => store.video);
    const { theme } = useSelector(store => store.ui);
    const toggleHandler = () => {
        dispatch(toggleMenu());
    };
    
    const submitHandler = async() => {
        const {data} =await fetchDataFromTagButton(inputText);
        dispatch(videoAction.setVideo(data?.items));
        setInputText('');
    };

    const showSuggestionHandler = async () => {
        try {
            const { data } = await fetchSuggestionData(inputText);
            dispatch(videoAction.setSuggestion(data[1]));
        } catch (error) {
            console.error(error);
        }
    };

    const insertInputHandler = (text) => {
        setInputText(text);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            showSuggestionHandler();
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [inputText]);//Here useRef hook not working properly.

    return (
        <header className='dark:bg-slate-900 dark:text-white fixed justify-between w-full  top-0 z-50 bg-white drop-shadow-xl'>
            <ul className='flex justify-between py-1 h-[65px]'>
                <li className='flex gap-2 ml-4 my-3 cursor-pointer'>
                    <RxHamburgerMenu size={"24px"} onClick={toggleHandler} />
                    <img src={theme==='dark'?'/images/yt-logo-dark.png':"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png"}  className='h-6 ' />
                </li>
                <li className='flex w-[40%] m-2 ml-14'>
                    <div className='border border-gray-800 dark:border-gray-100 rounded-l-3xl w-full '>
                        <input 
                            type='text' 
                            className='outline-none w-full m-2 bg-transparent ml-4' 
                            placeholder='Search...' 
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                        />
                    </div>
                    <button 
                        type='submit' 
                        onClick={submitHandler} 
                        className='rounded-r-3xl border border-gray-900 px-4 dark:border-gray-100'
                    >
                        <RiSearch2Line />
                    </button>
                </li>
                {
                    (suggestion && suggestion.length !== 0) &&
                    <div className="fixed  top-3 z-50 w-[40%] py-5 bg-white shadow-lg mt-12 rounded-lg dark:bg-slate-900 left-1/2 transform -translate-x-1/2">
                        <ul>
                            {
                                suggestion.map((text, idx) => (
                                    <div 
                                        className="flex items-center px-4 hover:text-gray-500" 
                                        key={idx} 
                                        onClick={() => insertInputHandler(text)}
                                    >
                                        <CiSearch size="24px" />
                                        <li className="px-2 py-1 cursor-pointer text-md font-medium">{text}</li>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                }
                <li className='flex gap-4 mr-4 my-3'>
                    <div className=''>
                        <ThemeModel/>
                    </div>
                    <IoMdNotificationsOutline size={"24px"} className='cursor-pointer' />
                    <BiSolidCameraMovie size={"24px"} className='cursor-pointer' />
                    <img src='/images/new.png' className='h-7 w-8 rounded-[50%] cursor-pointer' />
                </li>
            </ul>
        </header>
    );
};

export default NavBar;
