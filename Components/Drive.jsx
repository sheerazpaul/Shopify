import React from 'react'
import DrivePart from './DrivePart'

function Drive() {
  return (
    <>
     <div className='bg-[#e7e5e5] h-[332px] w-[900px] ml-[330px] mt-6 rounded-2xl  shadow-md flex gap-1 flex-col p-2'>
        <div className=''>
                  <h1 className='text-xl font-bold'>Drive More Sales with Vidify AI Product Videos</h1>
        <p className='mt-1 text-sm'>Transform product marketing & your brand presence with stunning videos</p>
        </div>
         <DrivePart name="Documentation" para="Read our step-by-step guidelines to explore and master every Vidify feature." src="/images/assets/document.png"/>
          <DrivePart name="Support" para="Our team is always ready to help reach out anytime to solve any issue" src="/images/assets/support.png"/>
           <DrivePart name="Vidify Walkthrough" para="Book a session with our experts and learn how to get the most out of Vidify." src="/images/assets/walk.png"/>
     </div>
    </>
  )
}

export default Drive