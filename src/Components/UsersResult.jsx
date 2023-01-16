
import {useState, useEffect} from 'react';
import Spinner from './Spinner';


function UsersResult() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] =useState(true);

    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_BASE_URL}/users`,{
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        })
        const data = await res.json();
        setUsers(data);
        setIsLoading(false);
    } 
    if(!isLoading) {
      return (
      <div className='container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto'>
        {users.map(user => {
        return (
        <h2 key={user.id}>{user.login}</h2>
        )
      })}
      </div>)}
      else {
        return <Spinner />
      }
}


export default UsersResult