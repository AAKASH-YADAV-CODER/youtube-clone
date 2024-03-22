import React,{useEffect,useState} from 'react'
import ButtonTag from './ButtonTag';
import VideoList from './VideoList';
import { useSelector,useDispatch } from 'react-redux';
import { fetchDataFromApi,fetchDataFromTagButton } from '../utilities/api.jsx'
import { Link } from 'react-router-dom';
import { videoAction } from '../store/video-slice.jsx';
import axios from 'axios';
const UIcontainer = () => {
  const dispatch = useDispatch();
  const openSidebar = useSelector(state => state.ui.toggle)
  const { activeButton, videoDefault } = useSelector(store => store.video)
  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await fetchDataFromApi();
        dispatch(videoAction.setVideo(data?.items))
      }
      const fetchDataActiveTag = async () => {
        const { data } = await fetchDataFromTagButton(activeButton);
        dispatch(videoAction.setVideo(data?.items));
      }
      if (activeButton === "ALL") {
      fetchData()
    } else {
      fetchDataActiveTag()
    }
    } catch (err) {
      console.error(err)
    }
  }, [activeButton])//The info i learn from here is only pass dependencies which is essential , i do mistake here is :- passing of default video mean at evert http req it need to call network again an again which cause problem in index because at every http there is new data insert by redux so make sure only needed dependency should be give here
  return (
    <div className={`${openSidebar ? "w-[80%]" : "w-[95%]"}  bg-red-400 overflow-y-scroll overflow-x-scroll h-[calc(100vh)]`}>
      <ButtonTag />
      <div className='w-100% grid grid-cols-3 m-4 justify-center'>
        {videoDefault.map((items) => {
          const key = typeof items.id === 'object' ? items.id.videoId : items.id;
          return (<Link to={`/watch?v=${key}`} key={`${key}`}>
            <VideoList items={items} />
          </Link>)
        })}
      </div>
    </div>
  )
}

export default UIcontainer;