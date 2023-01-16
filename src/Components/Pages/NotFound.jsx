import React from 'react'
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'

function NotFound() {
  return (
    <div className='hero flex flex-col'>
      <div className='container flex flex-col items-center justify-center mb-10'>
        <h1 className='font-bold mb-10'>Error!</h1>
        <p className='text-xl'>Error 404 : The page you are looking for does not exist</p>
      </div>
      <div className='flex items-center justify-center bg-blue-900 w-[200px] h-[70px] text-white'>
        <Link to='/'><FaHome className='inline text-xl mr-3'/>
            Back to home
        </Link>
      </div>
    </div> 
  )
}

export default NotFound