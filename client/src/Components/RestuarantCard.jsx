import React from "react";
import {AiTwotoneStar} from "react-icons/ai"

const RestuarantCard = (props) => {
    return (
        <>
        
            <div className="bg-white p-4 mb-4 w-full rounded-2xl md:w-1/2 lg:w-1/3 
            transition duration-700 hover:shadow-2xl ease-in-out">
                
                <div className="w-full h-56 relative lg:h-64">
                    
                    <div className="absolute flex items-end justify-between w-full bottom-2">
                        <div className="flex flex-col gap-1 items-start">
                            {props.isPro && (
                            <span className="bg-app-500 text-white px-2 py-1 rounded ml-1 text-sm">
                                Pro extra 10% off</span>
                                )}
                            {props.isOff && (
                                <span className="bg-blue-600 text-white px-2 py-1 rounded ml-1 text-sm ">
                                ₹{`${props.isOff}`} OFF</span>
                            )}
                            
                        </div>
                            <span className="bg-white bg-opacity-75 p-1 rounded-md mr-1 text-sm">
                                {props.durationOfdelivery} min</span>
                    </div>

                    <img src={props.photos.length && props.photos[0]}
                     alt="" className="w-full h-full rounded-2xl object-cover"/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between mt-3 ">
                        <h4 className="text-xl font-medium">{props.name}</h4>
                        <span className="bg-green-800 flex items-center text-white p-1 rounded ">
                            {props.restuarantReviewValue} <AiTwotoneStar /> </span>
                    </div>
                    <div className="flex items-center justify-between my-1 text-gray-600">
                        <p>{props.cuisine.join(", ")}</p>
                        <p>₹ {props.averageCost} for one</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestuarantCard;