import React from "react"
import {TiStar} from "react-icons/ti"


const MenuSimilarRestuarantCard = (props) => {
    return (
        <>
        <div className="mx-2">
            <div className="bg-white shadow rounded-md">
                <div className="w-full h-48 ">
                    <img src={props.image} alt={props.title} className="w-full h-full rounded-t-md  object-cover"  />
                </div>
                <div className="flex flex-col gap-2 p-3">
                    <h3 className="text-md my-1 text-center font-semibold ">{props.title}</h3>
                    <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-gray-600 text-sm">
                            <span className="flex items-center gap-1 bg-green-700 text-white
                             py-0.5 px-1 rounded text-sm">
                                30 <TiStar /> </span>
                            Dining
                        </span>
                        <span className="border-r border-gray-400 w-2 h-6" />

                        <span className="flex items-center gap-1 text-gray-600 text-sm">
                            <span className="flex items-center gap-1 bg-green-700 text-white py-0.5
                            px-1 text-sm rounded ml-0.5">
                                30 <TiStar /> </span>
                            Dining
                        </span>

                    </div>

                    <h4>Street Food, Beverages, Tea</h4>
                </div>
            </div>
            </div>
        </>
    )
}

export default MenuSimilarRestuarantCard;