import { GET_RESTUARANT } from "./restuarant.type"

const INITIAL_STATE = {
    restuarants: [],
}

const restuarantReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GET_RESTUARANT: 
            return{
                ...state,
                restuarants: action.payload
            }
        
        default:
            return{
                ...state
            }
    }
}

export default restuarantReducer;