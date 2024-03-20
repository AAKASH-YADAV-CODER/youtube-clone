import React,{useEffect,useState} from 'react'
import ButtonTag from './ButtonTag';
import VideoList from './VideoList';
import { useSelector } from 'react-redux';
import { fetchDataFromApi } from '../utilities/api'
const UIcontainer = () => {
  const openSidebar=useSelector(state=>state.ui.toggle)
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    try {
      const fetchData = async()=> {
        const {data }=await fetchDataFromApi();
        setItems(data?.items)
      }
      fetchData()
    } catch (err) {
      console.error(err);
    }
  },[items])
  return (
      <div className={`${openSidebar?"w-[80%]":"w-auto"}  bg-red-400 overflow-y-scroll overflow-x-scroll h-[calc(100vh)]`}>
      <ButtonTag />
      <div className='w-100% grid grid-cols-3 m-4 justify-center'>
        {items.map(items => <VideoList key={items.id} items={items} />)}
      </div>
    </div>
  )
}

export default UIcontainer;