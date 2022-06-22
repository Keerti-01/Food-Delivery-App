import React, { useState, useEffect } from "react";
import {TiStarFullOutline} from "react-icons/ti";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import { getUser } from "../../../Redux/Reducer/User/Image/user.action";

const ReviewCard = (props) => {
    const [user , setUser] =  useState([]);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser(props.user)).then(data => 
            // setUser(data.payload.user.user.user)
            console.log(data)
            );
    }, [])
    return (
        <>
        <div className="flex flex-col gap-3 my-3">
            <div className="flex items-center gap-6 md:justify-between ">
                <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full">
                    <img src="https://cdn1.vectorstock.com/i/1000x1000/36/15/businessman-character-avatar-isolated-vector-12613615.jpg" 
                    alt="avatar" className="w-full h-full rounded-full object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold">{user?.fullname}</h3>
                    <small className="text-gray-500">5 Reviews &#8226; 3 Followers</small>
                </div>
                </div>
                <button className="text-app-400 border border-app-400 p-1 rounded-lg">Follow</button>
            </div>

            {/* body of review */}
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                    <span className="text-white bg-green-700 text-sm px-2 py-1 rounded-lg flex items-center gap-1">
                        3 <TiStarFullOutline /> </span>
                    <h5 className="font-base uppercase">{props.isRestuarantReview ? "Dining" : "Delivery"}</h5>
                    <small className="text-gray-500">{dayjs(props.createdAt).format("DD MM YYYY")}</small>
                </div>
                <div className="w-full mt-1">
                    <p className="w-full text-gray-600 font-light text-base ">{props.reviewText}</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default ReviewCard;