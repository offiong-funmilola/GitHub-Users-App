
import { useContext } from 'react';
import Spinner from './Spinner';
import UserItem from './UserItem';
import GitHubContext from './Context/GitHub/GitHubContext';


function UsersResult() {
    //const [users, setUsers] = useState([]);
    //const [isLoading, setIsLoading] =useState(true);
    const {users, isLoading } = useContext(GitHubContext);

   /* useEffect(() => {
      fetchUsers();
    },);
    
    /*const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_BASE_URL}/users`,{
            headers: {
              Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        })
        const data = await res.json();
        users(data);
        isLoading(false);
    } */
    if(!isLoading) {
      return (
      <div className='container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
        {users.map((user) => {
        return (
          <UserItem key={user.id} user={user}/>
        )

      })}
      </div>)}
      else {
        return <Spinner />
      }
}


export default UsersResult