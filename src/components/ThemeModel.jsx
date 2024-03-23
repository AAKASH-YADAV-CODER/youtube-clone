import React,{useEffect} from 'react'
import {FaMoon} from 'react-icons/fa'
import { BsSunFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../store/ui-slice.jsx';
const ThemeModel = () => {
    const { theme } = useSelector(store => store.ui)
    const dispatch = useDispatch();
    //Thirdly we can toggle that button also mean user remove and add that dark class
    const switchHandler = () => {
        dispatch(setTheme(theme === 'dark' ? 'light' : 'dark'));
        localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');//Acc. to user it remain persist
    }
    useEffect(() => {
        //Firstly Check system preference
        // const system=window.matchMedia('prefer-color-schema:dark').matches
        // if (system) {
        //     dispatch(setTheme('dark'))
        // } else {
        //     dispatch(setTheme('light'))
        // }
        const savedTheme = localStorage.getItem('theme');//This will get item from localStorage and set it
        if (savedTheme) {
            dispatch(setTheme(savedTheme))
        }
    }, [])
    useEffect(() => {
        //Secondly According to theme we add and remove class(dark) this help in all app by directly applying dark:....
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    },[theme])
  return (
      <button className='cursor-pointer w-12 rounded-2xl dark:bg-yellow-300 dark:text-slate-700 bg-slate-600 text-white m-1 p-1 dark:flex dark:justify-end transition-colors duration-1000' onClick={switchHandler}>
          {theme==='dark'?<FaMoon/>:<BsSunFill/>}
    </button>
  )
}

export default ThemeModel;