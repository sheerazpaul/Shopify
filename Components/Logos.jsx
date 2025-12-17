import React from 'react'
import { Link } from 'react-router-dom'

function Logos({name ,src ,to='/'}) {
  return (
    <Link 
    className='flex gap-2 p-1 ml-5 font-semibold text-black text-md hover:bg-white hover:w-48 hover:pl-2 hover:rounded-xl '
    to={to}
    >
         <img className='h-4 mt-1' src={src} alt="" />
        <p>{name}</p>
    </Link>
  )
}

export default Logos