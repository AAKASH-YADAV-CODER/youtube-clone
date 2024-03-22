import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import SideBar from './SideBar';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import axios from 'axios';
import ChatLayout from './Chat/ChatLayout';
const WatchVideo = () => {
    // const [input, setInput] = useState("");
    const menuOpen = useSelector(state => state.ui.toggle);
    const [singleVideo, setSingleVideo] = useState(null);
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const getSingleVideo = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
            setSingleVideo(res?.data?.items[0]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getSingleVideo();
    }, []);

    return (
        <div className='flex left-0 relative top-[65px] p-1 justify-between'>
            {menuOpen && <div className='w-full h-full fixed top-[65px] left-0 bg-black bg-opacity-20 z-50'>
                <SideBar />
            </div>}
            <div className='w-[75%]'>
                <iframe
                    width="100%"
                    height="500"
                    src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
                <h1 className='font-bold mt-2 text-lg'>{singleVideo?.snippet?.title}</h1>
                <div className='flex items-center justify-between overflow-auto'>
                    <div className='flex items-center justify-between gap-8 my-3'>
                        <div className='flex'>
                            <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" className='w-8 h-8 rounded-full' />
                            <h1 className='font-bold ml-2'>{singleVideo?.snippet?.channelTitle}</h1>
                        </div>
                        <button className='px-4 py-1 font-medium bg-black text-white rounded-full'>Subscribe</button>
                    </div>
                    <div className='flex items-center  justify-between mt-2 gap-5'>
                        <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                            <AiOutlineLike size="20px" className='mr-5' />
                            <AiOutlineDislike size="20px" />
                        </div>
                        <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                            <PiShareFatLight size="20px" className='mr-2' />
                            <span>Share</span>
                        </div>
                        <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full'>
                            <GoDownload />
                            <span>Download</span>
                        </div>
                    </div>
                </div>
            </div>
            <ChatLayout />
        </div>
    )
}

export default WatchVideo;