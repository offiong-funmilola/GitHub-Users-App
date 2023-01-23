import React from 'react';
import { useState, useContext } from 'react';
import GitHubContext from './Context/GitHub/GitHubContext';

function UserSearch() {
    const [text, setText] = useState("");
    const { fetchUsers, users, clearUsers } = useContext(GitHubContext);

    const submitHandler = (e) => {
        e.preventDefault();
        if (text === '') {
            alert("Enter a search keyword");
        }
        else {
            fetchUsers(text);
            setText("");
        }
    };
    

  return (
    <div className='grid grid-cols-2 gap-8 mb-8'>
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <div className='relative'>
                    <input type='text' placeholder='Enter a search keyword' className='input input-lg bg-gray-300 text-color-white w-full w-[400px]' value={text} onChange={(e) => {setText(e.target.value)}}></input>
                    <button  type='submit' className='btn btn-ghost btn-lg absolute top-0 right-0 w-26'>Search</button>
                </div>
            </div>
        </form>
        <div>
            {users.length > 0 && (
                <div>
                    <button type="button" className='btn btn-lg' onClick={clearUsers}>clear</button>
                </div>
            )}
            
        </div>
      
    </div>
  )
}

export default UserSearch
