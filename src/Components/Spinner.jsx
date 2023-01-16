import React from 'react'
import spinner from './assets/spinner.jpg'

function Spinner() {
  return (
    <div className='flex items-center justify-center'>
        <img src={spinner} alt="Loading..." className='w-[150px] h-[150px]'/>
    </div>
  )
}

export default Spinner