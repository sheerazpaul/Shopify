import React from 'react'
import { BiDotsHorizontalRounded } from "react-icons/bi";
function CardsPart({image,name,para,logo,btn}) {
  return (
      <>
  <div className='bg-[#e7e5e5] h-[172px] w-[900px] ml-[330px] mt-6 rounded-2xl  shadow-md flex gap-1 '>
    <div className=''>
      <img  className=' h-[170px] w-[600px] rounded-md' src={image} alt="" />
    </div>
    <div className='flex flex-col ml-3'>
      <div className='flex gap-48 mt-3 ml-3'>
            <h3 className='text-sm font-semibold'>{name}</h3>
           <BiDotsHorizontalRounded />
      </div>
      <div className='mt-3'>
        <p className='text-sm '>{para}</p>
      </div>
      <button className='flex h-8 p-1 mt-4 text-sm bg-white rounded-xl w-[160px] gap-2'>
        <img className='h-4 mt-1'  src={logo} alt="" />
       {btn}
        </button>
      </div>
    </div>
    </>
  )
}

export default CardsPart