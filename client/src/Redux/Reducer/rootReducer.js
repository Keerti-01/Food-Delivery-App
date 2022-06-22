import {combineReducers} from "redux"

import restuarant from "./restuarant/restuarant.reducer"
import image from "./Image/Image.reducer"
import reviews from "./Reviews/restuarant/review.reducer"
import user from "./User/Image/user.reducer";
import food from "./Food/Food.reducer"

const rootReducer = combineReducers({ restuarant, image , reviews, user, food})

export default rootReducer;