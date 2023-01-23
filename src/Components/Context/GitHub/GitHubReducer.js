const gitHubReducer= (state, action) => {
   // const {type, payload} = action;
    switch(action.type) {
        case 'GET_USERS':
            return {
                ...state,
                users: action.payload,
                isLoading: false,
            }
        case 'SET-LOADING':
            return {
                ...state, 
                isLoading: true
            }
        case 'CLEAR_USERS':
            return {
                ...state,
                users: []
            }
        default:
            return state    
        } 
   
}
export default gitHubReducer;