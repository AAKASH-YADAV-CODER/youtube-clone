import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import SideBar from './SideBar';
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { fetchSingleVideo } from '../utilities/api.jsx';
import ChatLayout from './Chat/ChatLayout';
import { setLoading } from '../store/ui-slice.jsx';
import { SkeletonLoading } from './SkeletonLayout.jsx';
const WatchVideo = () => {
    const menuOpen = useSelector(state => state.ui.toggle);
    const [singleVideo, setSingleVideo] = useState(null);
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const dispatch = useDispatch();
    const {isLoading}=useSelector(store=>store.ui)
    const getSingleVideo = async () => {
        dispatch(setLoading(true));
        try {
            const res = await fetchSingleVideo(videoId);
            setSingleVideo(res?.data?.items[0]);
            
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        } 
    }
    useEffect(() => {
        getSingleVideo();
    }, []);

    return (
        <div className='flex-row sm:flex left-0 relative top-[65px] p-1 justify-between dark:bg-slate-900 dark:text-white min-h-screen'>
            {menuOpen && <div className='w-full h-full fixed top-[65px] left-0 bg-black bg-opacity-20 z-50'>
                <SideBar />
            </div>}
            {isLoading && <SkeletonLoading/>}
            <div className='w-[100%] sm:w-[75%] h-[250px] sm:h-[550px]'>
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
                <h1 className='font-bold mt-2 text-lg'>{singleVideo?.snippet?.title}</h1>
                <div className='flex items-center justify-between overflow-auto no-scrollbar'>
                    <div className='flex items-center justify-between gap-8 my-3'>
                        <div className='flex'>
                            <img src={singleVideo?.snippet?.thumbnails?.high?.url} className='w-8 h-8 rounded-full' />
                            <h1 className='font-bold ml-2'>{singleVideo?.snippet?.channelTitle}</h1>
                        </div>
                        <button className='px-4 py-1 font-medium bg-black text-white rounded-full dark:bg-gray-200 dark:text-black'>Subscribe</button>
                    </div>
                    <div className='flex items-center  justify-between mt-2 gap-5'>
                        <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full dark:text-black'>
                            <AiOutlineLike size="20px" className='mr-5' />
                            <AiOutlineDislike size="20px" />
                        </div>
                        <div className='flex items-center cursor-pointer bg-gray-200 px-4 py-2 rounded-full dark:text-black'>
                            <PiShareFatLight size="20px" className='mr-2' />
                            <span>Share</span>
                        </div>
                        <div className='flex items-center cursor-pointer dark:text-black bg-gray-200 px-4 py-2 rounded-full'>
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