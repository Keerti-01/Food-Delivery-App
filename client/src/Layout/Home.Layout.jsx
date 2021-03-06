import React from "react"

//components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";


const HomeLayout = ({props, children}) => {
    return (
        <>
            <Navbar />
            <FoodTab />
            <div className="container mx-auto px-4 lg:px-20 ">{children}</div>
            
               
        </>
    ) 
}

export default HomeLayout;

