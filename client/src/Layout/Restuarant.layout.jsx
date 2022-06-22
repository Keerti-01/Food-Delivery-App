import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi"

//components
import RestuarantNavbar from "../Components/Navbar/restuarantNavbar";
import ImageGrid from "../Components/restuarant/ImageGrid";
import RestuarantInfo from "../Components/restuarant/RestuarantInfo";
import InfoButtons from "../Components/restuarant/InfoButtons";
import TabContainer from "../Components/restuarant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";

//Redux actions
import { getSpecificRestuarant } from "../Redux/Reducer/restuarant/restuarant.action";
import { getImage } from "../Redux/Reducer/Image/Image.action";
const RestuarantLayout = (props) => {
    const [restuarant, setRestuarant] = useState({ 
        images: [],
        name: "",
        cuising: "",
        address: ""
     });
    const {id} = useParams();   
    const dispatch = useDispatch();  
    useEffect(() => {
        dispatch(getSpecificRestuarant(id)).then((data) => {
            setRestuarant((prev) => ({
            ...prev,
            ...data.payload.restuarant
        }));

        dispatch(getImage(data.payload.restuarant.photos)).then(data => setRestuarant(prev => ({...prev, ...data.payload.image}))
            );
        });
    }, []);
    return (
        <>    
        {" "}
            <RestuarantNavbar />
            <div className="container mx-auto px-4 lg:px-20 pb-10 my-10 ">
                <ImageGrid 
                images={restuarant.images} />
                <RestuarantInfo 
                name={restuarant?.name} 
                restuarantRating={restuarant?.rating || 0} 
                deliveryRating={restuarant?.rating || 0}
                cuisine={restuarant?.cuising}
                address={restuarant?.address} />

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

            <CartContainer />

            
        </>
    )
}

export default RestuarantLayout;
