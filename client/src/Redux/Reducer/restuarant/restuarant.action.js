import axios from "axios"

//redux type
import { GET_RESTUARANT } from "./restuarant.type"

export const getRestuarant = () => async (dispatch) => {
    try {
        const restuarantList = await axios({
            method: "GET",
            url: "http://localhost:4000/restuarant/?city=Hyderabad"
        })
    
        return dispatch({ type: GET_RESTUARANT, payload: restuarantList.data})

    } catch (error) {
         return dispatch({ type: "ERROR", payload: error})
    }
}