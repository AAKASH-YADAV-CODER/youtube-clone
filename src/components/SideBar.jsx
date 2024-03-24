import React,{useState,useEffect} from 'react'
import { categories } from "../utilities/constant.jsx"
import { useSelector,useDispatch } from 'react-redux';
import { fetchDataFromApi, fetchDataFromTagButton } from '../utilities/api.jsx';
import { videoAction } from '../store/video-slice.jsx';
import { setLoading } from '../store/ui-slice.jsx';
const SideBar = () => {
    const open = useSelector(state => state.ui.toggle);
    const dispatch = useDispatch();
    const [active, setActive] = useState('Home');
    const submitHandler = (name) => {
        if (name !== active) {
            setActive(name)
        }
    }
    const fetchDefaultData = async () => {
        dispatch(setLoading(true));
        try {
            const { data } = await fetchDataFromApi();
            dispatch(videoAction.setVideo(data?.items))
            
        } catch (err) {
            console.error(err)
        } finally {
            dispatch(setLoading(false));
        }
    }
    const fetchDataSideButton = async () => {
        dispatch(setLoading(true));
        try {
            const { data } = await fetchDataFromTagButton(active);
            dispatch(videoAction.setVideo(data?.items));
        } catch (err) {
            console.error(err)
        } finally {
            dispatch(setLoading(false));
        }
    }
    useEffect(() => {
        if (active === 'Home') {
            fetchDefaultData();
        } else {
            fetchDataSideButton();
        }
    },[active])
  return (
      <div className={`sm:${open?"w-[20%]":"w-[5%]"} bg-white overflow-y-scroll overflow-x-hidden h-[calc(100vh)] dark:bg-slate-900 dark:text-white pr-5`}>
          <ul className="ml-4 text-l space-y-3">
              {categories.map((ele,i)=>{
                  return (
                      <li key={i} className={`flex justify-start gap-3 items-center pt-3 ${ele.name===active?'border border-red-600 bg-blue-300':''} hover:text-xl rounded-lg cursor-pointer pb-3 pl-2 pr-3 overflow-auto no-scrollbar mt-3 `} onClick={()=>submitHandler(ele.name)}>
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