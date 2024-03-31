import React from 'react'
import NavBar from './NavBar.jsx'
import SideBar from './SideBar.jsx'


const RootLayout = ({ updateAuthStatus }) => {
    return (
        <>
            <NavBar updateAuthStatus={updateAuthStatus} />
            {/* <SideBar/> */}
        </>
    )
}

export default RootLayout