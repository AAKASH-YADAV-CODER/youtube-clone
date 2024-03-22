import React,{useState,useEffect} from 'react'
import axios from "axios";
const VideoList = ({items}) => {
  const [ytIcon, setYtIcon] = useState("");
  useEffect(() => {
    const getYoutubeChannelName = async () => {
    try {
      const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${items.snippet.channelId}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`)
      setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
    } catch (error) {
      console.log(error);
    }
  }
    getYoutubeChannelName();
  }, [])

  return (
    <div className='m-2 cursor-pointer'>
      <img src={items.snippet.thumbnails.medium.url} className='rounded-2xl'/>
      <div className='m-2 flex gap-2'>
        <img src={ytIcon} className='w-8 h-8 rounded-full'/>
        <div className=''>
          <p className='overflow-x-clip'>{items.snippet.title}</p>
          <h2 className='text-gray-800 font-bold'>{items.snippet.channelTitle}</h2>
        </div>
      </div>
    </div>
  )
}

export default VideoList