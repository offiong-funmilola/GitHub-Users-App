import React from 'react'
import UserSearch from '../UserSearch';
import UsersResult from '../UsersResult';

function Home() {
  return (
    <div className='w-screen flex flex-col items-center px-20'>
      <h1 className='mb-5'>GitHub Users</h1>
        <UserSearch />
        <UsersResult />
    </div>
  )
}

export default Home