import React from 'react'

function Footer() {
    const ayear = new Date().getFullYear();
  return (
    <>
        <footer className='footer bottom-0 w-full bg-gray-300 h-[70px] flex items-center justify-center mt-8'>
            <div>
                <p>&copy; {ayear} | All rights Reserved. </p>
            </div>
        </footer>
    </>
  )
}

export default Footer