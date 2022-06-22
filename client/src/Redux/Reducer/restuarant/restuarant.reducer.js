import { GET_RESTUARANT } from "./restuarant.type"
import { GET_SPECIFIC_RESTUARANT } from "./restuarant.type"

const INITIAL_STATE = {
    restuarants: [],
    selectedRestuarant: {}
}

const restuarantReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GET_RESTUARANT: 
            return{
                ...state,
                restuarants: action.payload
            }

        case GET_SPECIFIC_RESTUARANT:
            return{
                ...state,
                selectedRestuarant: action.payload
            }
        
        default:
            return{
                ...state
            }
    }
}

export default restuarantReducer;