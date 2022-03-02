const initialState = {
    drinks: [],
    details: [],
    loading: false
};



function rootReducer(state= initialState, action){
    switch (action.type) {
        case 'GET_DRINKS':
            return {
                ...state,
                drinks: action.payload,
                loading: false
            }
        case 'LOADING':
                return {
                    ...state,
                    loading: true
                }    
        case 'GET_NAMES':
            return {
                ...state,
                drinks: action.payload
            }
        case 'GET_DETAIL':
            return {
                ...state,
                details: action.payload
                
            }   
        default:
            return state;
    }
};

export default rootReducer;
