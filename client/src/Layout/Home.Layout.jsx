import React from "react"

//components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";


const HomeLayout = ({props, children}) => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 lg:px-20 "></div>
            <FoodTab />
            
        </>
    ) 
}

export default HomeLayout;

