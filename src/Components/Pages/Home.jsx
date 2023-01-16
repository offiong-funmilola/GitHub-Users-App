import React from 'react'
import UsersResult from '../UsersResult';

function Home() {
  return (
    <div className='w-screen flex flex-col items-center px-20'>
      <h1 className='mb-5'>Welcome Home</h1>
        <UsersResult />
    </div>
  )
}

export default Home