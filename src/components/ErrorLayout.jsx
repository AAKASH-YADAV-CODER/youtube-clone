import React from 'react'

const ErrorLayout = (props) => {
  return (
    <div className='h-full w-full fixed top-0 left-0 bg-black bg-opacity-60 flex justify-center items-center z-50' onClick={props.onClose}>
      <div className='bg-white p-8 shadow-md rounded-xl w-[50%] h-[50%] text-center space-y-12'>
        <h1 className='font-bold text-5xl m-8'>{props.title}</h1>
        <p className='text-gray-700 text-2xl font-serif'>{props.children}</p>
        <button className='bg-red-600 hover:bg-red-700 rounded-xl px-8 py-2 text-lg font-semibold' onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default ErrorLayout