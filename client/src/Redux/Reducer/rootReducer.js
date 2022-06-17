import {combineReducers} from "redux"

import restuarantReducer from "./restuarant/restuarant.reducer"

const rootReducer = combineReducers({ restuarantReducer })

export default rootReducer;