import React from 'react'
import UIcontainer from '../components/UIcontainer.jsx'
import SideBar from '../components/SideBar.jsx'

const Home = () => {
    return (
        <div className='flex left-0 relative top-[65px]'>
            <SideBar />
            <UIcontainer />
        </div>
    )
}

export default Home