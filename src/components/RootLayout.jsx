import React from 'react'
import NavBar from './NavBar.jsx'
import SideBar from './SideBar.jsx'
import UIcontainer from './UIcontainer.jsx'

const RootLayout = () => {
    return (
        <>
            <NavBar />
            <div className='flex left-0 relative top-[65px]'>
                <SideBar />
                <UIcontainer />
            </div>
        </>
    )
}

export default RootLayout