import React from "react"


//components
import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestuarantCard from "../RestuarantCard";

const Delivery = () => {
    return <>
        <DeliveryCarousel />
        <Brand />
        <RestuarantCard />
    </>
}

export default Delivery;