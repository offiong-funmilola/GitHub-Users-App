import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


function Navbar({title}) {
  return (
    <>
        <nav className="w-screen h-[80px] bg-blue-900 shadow-lg text-content-neutralmb-8">
            <div className="container w-[90%] mx-auto bg-inherit flex flex h-full items-center">
                <div className='flex mr-auto'>
                    <FaGithub className='text-3xl mr-3 text-white'/>
                    <Link to='/' className='text-xl text-white'> {title} </Link>
                </div>
                <div>
                    <Link to='/' className='btn btn-ghost btn-sm rounded-lg text-white mr-3'>Home</Link>
                    <Link to='/about' className='btn btn-ghost btn-sm rounded-lg text-white mr-3'>About</Link>
                </div>
            </div>
        </nav>
    </>
  )
}

Navbar.defaultProps = {
    title: "GitHub Users Application",
}

Navbar.propTypes = {
    title: PropTypes.string,
}


export default Navbar