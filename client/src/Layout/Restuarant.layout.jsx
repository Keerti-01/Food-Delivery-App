import React, { useState, useEffect } from "react"

//components
import RestuarantNavbar from "../Components/Navbar/restuarantNavbar";
import ImageGrid from "../Components/restuarant/ImageGrid";


const RestuarantLayout = () => {

    const [restuarant, setRestaurant] = useState({
        images: [
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
            "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png"
        ],
        
      });

    return (
        <>    
        {" "}
            <RestuarantNavbar />
            <div className="container mx-auto px-4 lg:px-20 pb-10 my-10 ">
                <ImageGrid images={restuarant.images} />
            </div>
        </>
    )
}

export default RestuarantLayout;
