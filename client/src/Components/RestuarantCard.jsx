import React from "react";
import {AiTwotoneStar} from "react-icons/ai"

const RestuarantCard = () => {
    return (
        <>
        <h1 className="text-xl font-semibold mb-4 ">Restuarant Dishes</h1>
            <div className="bg-white p-2 w-full rounded-2xl md:w-1/2 lg:w-1/4 
            transition duration-700 hover:shadow-2xl ease-in-out">
                
                <div className="w-full h-56 relative lg:h-64">
                    
                    <div className="absolute flex items-end justify-between w-full bottom-2">
                        <div className="flex flex-col gap-1 items-start">
                            <span className="bg-app-500 text-white px-2 py-1 rounded ml-1 text-sm">
                                Pro extra 10% off</span>
                            <span className="bg-blue-600 text-white px-2 py-1 rounded ml-1 text-sm ">
                                ₹80 OFF</span>
                        </div>
                            <span className="bg-white bg-opacity-75 p-1 rounded mr-1 text-sm">42 min</span>
                    </div>

                    <img src="https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png"
                     alt="" className="w-full h-full rounded-2xl object-cover"/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between mt-3 ">
                        <h4 className="text-xl font-medium">Behroz Biriyani</h4>
                        <span className="bg-green-800 flex items-center text-white p-1 rounded ">
                            4.1 <AiTwotoneStar /> </span>
                    </div>
                    <div className="flex items-center justify-between my-1 text-gray-600">
                        <p>Biriyani, North Indian, Mughlai</p>
                        <p>₹ 350</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RestuarantCard;