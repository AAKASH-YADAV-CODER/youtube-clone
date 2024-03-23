import React from 'react'
import Root from './pages/RootPage.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/HomePage.jsx'
import WatchPage from "./pages/WatchPage.jsx"
import ErrorPage from './pages/ErrorPage.jsx'
import { SkeletonTheme } from 'react-loading-skeleton'
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'watch',
          element: <WatchPage />
        },
      ]
    }
  ])
  return (<SkeletonTheme baseColor='#313131' highlightColor='#e8ffd1'><RouterProvider router={router} /> </SkeletonTheme>)
}

export default App
//#e8ffd1