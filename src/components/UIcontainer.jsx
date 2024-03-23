import React, { useEffect,useState } from 'react';
import ButtonTag from './ButtonTag';
import VideoList from './VideoList';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDataFromApi, fetchDataFromTagButton } from '../utilities/api.jsx';
import { Link } from 'react-router-dom';
import { videoAction } from '../store/video-slice.jsx';
import { setLoading } from '../store/ui-slice.jsx';
import SkeletonLayout,{SkeletonLoading} from './SkeletonLayout.jsx';

const UIcontainer = () => {
  const dispatch = useDispatch();
  const openSidebar = useSelector(state => state.ui.toggle);
  const { activeButton, videoDefault } = useSelector(store => store.video);
  const { isLoading } = useSelector(store => store.ui);
   const [debouncedActiveButton, setDebouncedActiveButton] = useState(activeButton);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const { data } = await fetchDataFromApi();
        dispatch(videoAction.setVideo(data?.items));
      } catch (err) {
        console.error(err);
      } finally {
        dispatch(setLoading(false));
      }
    };

    const fetchDataActiveTag = async () => {
      dispatch(setLoading(true));
      try {
        const { data } = await fetchDataFromTagButton(debouncedActiveButton);
        dispatch(videoAction.setVideo(data?.items));
      } catch (err) {
        console.error(err);
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (activeButton === "ALL") {
      fetchData();
    } else {
      fetchDataActiveTag();
    }
  }, [debouncedActiveButton]);
   useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedActiveButton(activeButton);
    }, 1000); 

    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeButton]);
  return (
    <div className={`md:${openSidebar ? "w-[80%]" : "w-[95%]"} bg-white overflow-y-scroll overflow-x-scroll h-[calc(100vh)] dark:bg-slate-900 dark:text-white w-full`}>
      <ButtonTag />
      {isLoading && <SkeletonLayout />}
      <div className='w-100% grid grid-cols-1 md:grid-cols-3 m-4 justify-center sm:grid'>
        {videoDefault.map((items) => {
          const key = typeof items.id === 'object' ? items.id.videoId : items.id;
          return (
            <Link to={`/watch?v=${key}`} key={key}>
              {isLoading===true ? <SkeletonLayout /> : <VideoList items={items} />}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default UIcontainer;
