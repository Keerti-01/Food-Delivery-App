import React from "react"

const FoodItem = (props) => {

    return (
        <>
        <div className=" flex items-center justify-between">
            <h5>{props.name}</h5>
            <div className="flex flex-col items-end mx-2">
                <small className="text-base">₹{parseInt(props.price) * parseInt(props.quantity)}</small>
                <div className="px-1 text-lg bg-app-400 text-white rounded-lg flex items-center gap-1">
                    <button className="bg-app-400 text-white rounded-lg p-1 ">-</button>
                    <small >2</small>
                    <button className="bg-app-400 text-white rounded-lg p-1">+</button>
                </div>
            </div>
        </div>
        <hr className="my-1 border border-gray-100"/>
        </>
    )
}

export default FoodItem;