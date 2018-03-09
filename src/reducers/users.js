const initialState = {
    list: []
}

const showUsers = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_USERS':
            console.log(action, 'accc');
            return Object.assign({}, state, { list: action.payload })
        default:
            return state
    }        
}

export default showUsers