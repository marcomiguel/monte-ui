const initialState = {
    list: [],
    selected: {}
}

const showUsers = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW_USERS':
            return Object.assign({}, state, { list: action.payload })
        case 'SHOW_USER':
            return Object.assign({}, state, { selected: action.payload })
        default:
            return state
    }        
}

export default showUsers