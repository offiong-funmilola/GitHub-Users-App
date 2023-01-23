import React from 'react';
import PropTypes  from 'prop-types';
import { Link } from 'react-router-dom';

function UserItem({user: {login, avatar_url}}) {
  return (
    <div className='card card-side shadow-xl bg-base-100'>
        <div className='flex-row items-center card-body space-x-4'>
            <div className='avatar'>
                <div className='w-14 h-14 rounded-full shadow'>
                    <img src={avatar_url} alt='avatar'/>
                </div>
            </div>
            <div className='flex-row'>
                <h2 className='card-title'>
                    {login}
                </h2>
                <Link to={`/users/${login}`} className='tex-base-content' >View Users Profile</Link>
            </div>
        </div>
    </div>
  )
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
