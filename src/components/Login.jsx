import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { BASE_URL } from "../utilities/api.jsx";
import ThemeModel from './ThemeModel.jsx';
const LoginPage = ({ updateAuthStatus }) => {
    const router = useNavigate();
    const [user, setUser] = useState({
        email: "",  
        password: "",
    })
    const [disable, setDisable] = useState(true);
     
    const submitHandler = async () => {
        try {
            const { data } = await axios.post(`${BASE_URL}/api/v1/users/login`, user);
            const tokens = data.data.accessToken;
            localStorage.setItem('token', tokens);
            updateAuthStatus(true);
            router("/");
            toast.success(data.message)
        } catch (error) {
            toast.error(error.response.data.message)
        }  
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }, [user])

    return (
        <div className='flex bg-red-700 min-h-screen dark:bg-slate-900 justify-center items-center'>
            <div className='bg-white p-10 rounded-lg shadow-lg dark:bg-slate-400'>
                <div className='flex items-center gap-3'>
                    <img src='/images/yt-logo-mobile.png' className='h-12 '/>
                    <h1 className='text-3xl font-thin hover:text-red-700'>LOGIN</h1>
                    <ThemeModel/>
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className=' border-2 outline-none border-zinc-600 rounded-md px-2 py-1'
                    />
                </div>
                <div className='flex flex-col my-4'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        className='border-2 outline-none border-zinc-600 rounded-md px-2 py-1'
                    />
                </div>
                <button onClick={submitHandler} className={`${disable ? "bg-[#e3e3e3] cursor-not-allowed" : "bg-red-500 hover:bg-red-700"}  w-full py-1 my-2 rounded-md text-white`} >Login</button>
                <p className='mt-4'>Dont have an account? <Link to={"/signup"} className='font-bold hover:text-red-600'>SIGNUP</Link> </p>

            </div>
        </div>
    )
}

export default LoginPage;