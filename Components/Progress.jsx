import React from 'react'

function Progress() {
  return (
   <>
   <div className='bg-[#e7e5e5] h-[120px] w-[900px] ml-[330px] mt-6 rounded-2xl p-[16px] shadow-md'>
    {/* first */}
    <div className='flex justify-between '>
        <div className='flex gap-2'>
           <h3 className='font-semibold'>Video Generator</h3>
        <img className='h-4 mt-[5px]' src="/images/assets/info.png" alt="" />
        </div>
        <div>
            <button className='p-1 text-sm font-semibold bg-white rounded-lg'>Upgrade your plan</button>
        </div>
    </div>
    {/* second */}
    <div>
        <div className='flex flex-col text-sm'>
            <p className='text-sm'>Current Plan: <span className='font-semibold'> Explorer – 2 AI Videos /Month</span></p>
            <p className='mt-1'>0/2 Videos</p>
        </div>
        <div className='mt-1'>
            <img src="/images/assets/bar.png" alt="" />
        </div>
    </div>
   </div>
   </>
  )
}

export default Progress