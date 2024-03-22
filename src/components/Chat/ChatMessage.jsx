import React from 'react';

const ChatMessage = ({ item }) => {
  return (
    <div className='flex items-start justify-start space-y-2'>

      <img src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw" className='w-7 h-7 rounded-full mt-2' />
                            

      <div className='flex items-start justify-start'>
        <h1 className='ml-2 font-bold text-sm'>{item.name}</h1>
        <p className='ml-2  text-sm'>{item.message}</p>
      </div>
    </div>
  )
}

export default ChatMessage