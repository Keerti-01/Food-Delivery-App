import axios from "axios"

//redux type
import { GET_USER, AUTH_USER } from "./user.type"

export const getUser = (_id) => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:4000/user/${_id}`
        })
    
        return dispatch({ payload: Image.data})

    } catch (error) {
         return dispatch({ type: "ERROR", payload: error})
    }
}

export const getMyself = () => async (dispatch) => {
    try {
        const User = await axios({
            method: "GET",
            url: `http://localhost:4000/user/`
        })
    
        return dispatch({ type: GET_USER, payload: Image.data})

    } catch (error) {
         return dispatch({ type: "ERROR", payload: error})
    }
}


