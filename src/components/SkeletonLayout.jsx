import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLayout = () => {
  return (
      <div className=" border border-gray-400 rounded-xl m-5 flex-row justify-center items-center bg-gray-300 z-50 ">
        <div className="flex justify-center items-center">
              <Skeleton circle height={100} width={100}/>
        </div>
          <div className="flex bg-gray-300 rounded-xl justify-center items-center">
              <Skeleton circle height={50} width={50} className='m-5'/>
          <Skeleton count={2} height={20} width={100}/>
        </div>
      </div>
  );
};

export const SkeletonLoading = () => {
    return (
        <div className='fixed top-1/2 flex justify-center items-center'>
            <img src="/images/yt-logo-mobile.png" className="rotate-animation" alt="YouTube Image" width={'10%'}/>
        </div>
    )
}

export default SkeletonLayout;
