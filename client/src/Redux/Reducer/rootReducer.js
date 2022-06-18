import {combineReducers} from "redux"

import restuarant from "./restuarant/restuarant.reducer"
import image from "./Image/Image.reducer"

const rootReducer = combineReducers({ restuarant, image })

export default rootReducer;