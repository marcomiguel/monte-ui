// ---- Cases ---- //

// Actions Type
export const LOAD_CASES = 'sentri/cases/LOAD'
export const CREATE_CASE = 'sentri/cases/CREATE'
export const UPDATE_CASE = 'sentri/cases/UPDATE'
export const REMOVE_CASE = 'sentri/cases/REMOVE'

// Reducer
const initialState = {
    list: [],
    selected: {}
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case LOAD_CASES:
            return { ...state, list: action.payload }
        default:
            return state
    }        
}

// Action Creators
export function loadCases(cases){
    return { type: LOAD_CASES, payload: cases}
}

// Api
export function getCases(){
    return dispatch => {
        import('../../assets/mock-data/cases.json')
            // .then( response => response.json())
            .then( response => { dispatch( loadCases(response)) })
    }
  }
