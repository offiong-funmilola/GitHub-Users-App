//import { createContext, useState } from "react";
import { createContext, useReducer } from "react";
import gitHubReducer from "./GitHubReducer";


 const GitHubContext = createContext();

 const GITHUB_BASE_URL = process.env.REACT_APP_GITHUB_BASE_URL;
 const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

 export const GitHubProvider = ({children}) => {
    //const [users, setUsers] = useState([]);
    //const [isLoading, setIsLoading] =useState(true);
    const initialState = {
        users: [],
        isLoading: false
    }
    const [state, dispatch] = useReducer(gitHubReducer, initialState);

    const fetchUsers = async (text) => {
        setLoading();
        const params = new URLSearchParams({q: text});
        const res = await fetch(`${GITHUB_BASE_URL}/search/users?${params}`,{
            headers: {
              Authorization: `token${GITHUB_TOKEN}`,
            },
        })
        const {items} = await res.json();
        //setUsers(data);
        //setIsLoading(false);
        dispatch({
            type: 'GET_USERS',
            payload: items
        })
    };
    const clearUsers =() => dispatch({
        type: "CLEAR_USERS",
    })

    const setLoading = () => dispatch({
        type: 'SET_LOADING',
    });

    return (<GitHubContext.Provider value={{users: state.users, isLoading: state.isLoading, fetchUsers, clearUsers}}> 
            {children}
        </GitHubContext.Provider>  
    )
}
export default GitHubContext;