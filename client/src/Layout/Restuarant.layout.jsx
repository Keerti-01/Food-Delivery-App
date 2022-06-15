import React, { useState, useEffect } from "react"
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi"

//components
import RestuarantNavbar from "../Components/Navbar/restuarantNavbar";
import ImageGrid from "../Components/restuarant/ImageGrid";
import RestuarantInfo from "../Components/restuarant/RestuarantInfo";
import InfoButtons from "../Components/restuarant/InfoButtons";
import TabContainer from "../Components/restuarant/Tabs";


const RestuarantLayout = (props) => {

    const [restuarant, setRestuarant] = useState({
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

                <RestuarantInfo 
                name="Mumbai Express" 
                restuarantRating="3.5" 
                deliveryRating="3.0" 
                cuisine="North Indian, Fast Food, Chinese, Street Food" 
                address="Vijay Nagar, Hyderabad" />

                {/* Button in restuarant layout */}
                <div className="my-6 flex flex-wrap gap-3">
                    <InfoButtons isActive>
                        <TiStarOutline /> Add Review
                    </InfoButtons>
                    <InfoButtons >
                        <RiDirectionLine /> Direction
                    </InfoButtons>
                    <InfoButtons >
                        <BiBookmarkPlus /> Bookmark
                    </InfoButtons>
                    <InfoButtons >
                        <RiShareForwardLine /> Share
                    </InfoButtons>
                </div>

                <div className="my-10">
                    <TabContainer>
                        {props.children}
                    </TabContainer>
                </div>
                <div className="relative">{props.children}</div>

            </div>

            
        </>
    )
}

export default RestuarantLayout;
