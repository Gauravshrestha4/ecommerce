import ActionTypes from '../actions/actionTypes';


const commonReducer = (state, action) => {
    switch(action.type) {
        case ActionTypes.GET_ALL_PRODUCTS : {
            console.log('Action : GET_ALL_PRODUCTS')
            return {
                ...state,
                products: action.payload
            }
            break;
        }

        default: {
            console.log('Invalid Action !!')
            return state;
            
        }
    }
}

export default commonReducer;