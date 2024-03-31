import React,{lazy,Suspense,useEffect} from 'react'
import Root from './pages/RootPage.jsx'
import { createBrowserRouter,RouterProvider,Navigate } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import { SkeletonTheme } from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux';
import { setAuth } from './store/ui-slice.jsx';
import SignupPage from './components/Signup.jsx';
import LoginPage from './components/Login.jsx';
const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const WatchPage = lazy(() => import('./pages/WatchPage.jsx'));
const App = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(store => store.ui);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(setAuth(false));
    } else {
      dispatch(setAuth(true));
    }
  }, [dispatch]);
  const updateAuthStatus = (status) => {
    dispatch(setAuth(status));
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element:isAuth ? <Root updateAuthStatus={updateAuthStatus} /> : <Navigate to='/login' />,
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
    },
    {
      path: '/signup',
      element: isAuth ? <Navigate to='/' /> : <SignupPage />,
    },
    {
      path: '/login',
      element: isAuth ? <Navigate to='/' /> : <LoginPage updateAuthStatus={updateAuthStatus} />,
    }
  ])
  return (<SkeletonTheme baseColor='#313131' highlightColor='#e8ffd1'><RouterProvider router={router} /> </SkeletonTheme>)
}

export default App
//#e8ffd1