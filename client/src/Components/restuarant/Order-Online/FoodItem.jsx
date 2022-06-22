import React, {useState, useEffect} from "react"
import { useDispatch } from "react-redux"
import ReactStars from "react-rating-stars-component"
import {AiOutlinePlus} from "react-icons/ai"
import  { getFood } from "../../../Redux/Reducer/Food/Food.action"
import { getImage } from "../../../Redux/Reducer/Image/Image.action"

const FoodItem = (props) => {
    const [food , setFood] = useState[{}]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFood(props._id)).then((data) => {
        setFood(data.payload.foods)
        dispatch(getImage(data.payload.foods.photos)).then((data) => {
            const{images} = data.payload.image
            images.lenght && setFood (prev => ({...prev, image: images[0].location }))
        })
    })
    },[])
    return (
        
        <>
      { food?.name && (
        <div className="flex items-start md:gap-2 ">
           { food?.image  && (
             <div className="w-3/12 h-24 lg:h-36 md:px-3 ">
             <img src={food?.image} alt="food" className="w-full h-full rounded-lg" />
         </div>
           )}
            <div className=" w-3/4 md:w-7/12 flex flex-col md:gap-1 ml-1">
                <div className="flex items-center gap-4 ">
                    <h3 className="text-base md:text-xl font-semibold">{food?.name}</h3>
                    <button className="md:hidden text-app-400 bg-app-50 border border-app-500 px-1 py-1 
                rounded-md flex item-center gap-1">
                   <AiOutlinePlus className="mt-1"/> Add  </button>
                </div>
                <ReactStars count={5} value={food?.rating || 0}/>
                <h5>₹{food?.price}</h5>
                <p className="truncate">{food?.descript}</p>
            </div>
            <div className="w-2/12 hidden md:block">
                <button className="text-app-400 bg-app-50 border border-app-500 px-3 py-1 
                rounded-md flex item-center gap-1">
                   <AiOutlinePlus className="mt-1"/> Add  </button>
            </div>
        </div>
      )}
        </>
    )
}

export default FoodItem;