import React from 'react'
import { HiOutlineArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

function DrivePart({src,name,para}) {
  return (
    <Link className='w-[880px] h-[74px] bg-white rounded-3xl mt-2 p-2 justify-between items-center flex'>
        <div  className=''>
           <img className="h-12 mt-1" src={src} alt="" />
        </div>
          <div className='mr-[220px]'>
            <h4 className='font-semibold'>{name}</h4>
            <p className='text-sm'>{para}</p>
        </div>
        <button className='w-16 h-16 bg-[#e7e5e5] rounded-full flex items-center justify-center'>
           < HiOutlineArrowRight />

        </button>
    </Link>
  )
}

export default DrivePart