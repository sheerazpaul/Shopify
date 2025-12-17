import React from 'react'

function Footer() {
  return (
    <>
    <div className='w-[900px] ml-[330px] mt-6 rounded-2xl  p-[7px]  flex justify-between '>
      <div className='flex gap-1'>
         <img className='h-6' src="/images/assets/vidify.png" alt="" />
        <p className='font-semibold text-md'>Vidify</p>
        </div>
        <div>
            <p>Copyright © 2025 | <span className='font-semibold'>Storeware</span> | Version 12.0.0</p>
        </div>
    </div>
    </>
  )
}

export default Footer