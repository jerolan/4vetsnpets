const initalState = {
    loading: false,
    currentUser: null, 
    error: null
}

function userReducer(state=initalState, action:any) {
    switch(action.type) {
        default:
            return state;
    }
}

export default userReducer;