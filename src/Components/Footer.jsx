import React from 'react'

function Footer() {
    const ayear = new Date().getFullYear();
  return (
    <>
        <footer className='footer, bg-gray-300 h-[70px] flex items-center justify-center'>
            <div>
                <p>&copy; {ayear} | All rights Reserved. </p>
            </div>
        </footer>
    </>
  )
}

export default Footer