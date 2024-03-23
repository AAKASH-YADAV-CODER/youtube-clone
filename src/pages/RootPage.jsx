import React from 'react'
import RootLayout from '../components/RootLayout.jsx'
import { Outlet } from 'react-router-dom'
const Root = () => {
    return (
        <>
            <RootLayout />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Root