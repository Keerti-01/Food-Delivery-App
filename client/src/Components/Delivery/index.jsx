import React, { useState,useEffect } from "react"
import { useSelector } from "react-redux";

//components
import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestuarantCard from "../RestuarantCard";

const Delivery = () => {

    const [restuarantList, setRestuarantList] = useState([])

    const reduxState = useSelector((globalStore) => (globalStore.restuarant.restuarants))
    console.log({reduxState})

    useEffect(() => {
       reduxState.restuarants && setRestuarantList(reduxState.restuarants)
    }, [reduxState.restuarants])

    return <>
        <DeliveryCarousel />
        <Brand />
        <h1 className="text-2xl font-semibold mb-4 ">Restuarant Dishes</h1>
        <div className="flex justify-between flex-wrap ">
            {
                restuarantList.map((restuarant) => (
                    <RestuarantCard {...restuarant} key={restuarant.id} />
                ))
            }
        </div>
    </>
}

export default Delivery;


// {
//     _id: "12345",
//     photos: [
//         "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png"
//     ],
//     name: "Behroz Biryani",
//     cuisine: ["Biryani", "Street Food", "Meals"],
//     averageCost: 100,
//     isPro: true,
//     isOff: 80,
//     durationOfDelivery: 47,
//     restuarantReviewValue: 4.1
// }