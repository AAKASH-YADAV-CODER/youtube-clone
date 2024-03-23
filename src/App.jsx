import React,{lazy,Suspense} from 'react'
import Root from './pages/RootPage.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import { SkeletonTheme } from 'react-loading-skeleton'
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const WatchPage = lazy(() => import('./pages/WatchPage.jsx'));
const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <HomePage/>
            </Suspense>
          )
        },
        {
          path: 'watch',
          element: (
            <Suspense fallback={<div>loading...</div>}>
              <WatchPage/>
            </Suspense>
          )
        },
      ]
    }
  ])
  return (<SkeletonTheme baseColor='#313131' highlightColor='#e8ffd1'><RouterProvider router={router} /> </SkeletonTheme>)
}

export default App
//#e8ffd1