import React, { useState , useEffect } from "react"
import {Link, useParams} from "react-router-dom"
import {IoMdArrowDropright} from "react-icons/io"
import Slider from "react-slick"
import {useSelector , useDispatch } from "react-redux"
import ReactStars from "react-rating-stars-component"


//component
import MenuCollection from "../../Components/restuarant/MenuCollection"
import MenuSimilarRestuarantCard from "../../Components/restuarant/MenuSimilarRestuarantCard"
import ReviewCard from "../../Components/restuarant/Reviews/ReviewCard"
import MapView from "../../Components/restuarant/MapView"

import { getImage } from "../../Redux/Reducer/Image/Image.action"
import { getReviews } from "../../Redux/Reducer/Reviews/restuarant/review.action"

const Overview = () => {
    const [menuImage, setMenuImages] = useState({ images: [] });
    const [Reviews, setReviewss] = useState([]);

    const {id} = useParams();

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        slidesToScroll: 1,
       
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true
                }
            },{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    } 

    const reduxState = useSelector(globalStore => globalStore.restuarant.selectedRestuarant
        .restuarant
        );
    const dispatch = useDispatch();

    useEffect(() => {
        if (reduxState) {
        dispatch(getImage(reduxState?.menuImage)).then((data) => {
            const images = [];
            data.payload.image.images.map(({ location }) => images.push(location));
            setMenuImages(images);
        });

        dispatch(getReviews(reduxState?._id)).then((data) => 
        setReviewss(data.payload.reviews)
        )
        }
    }, []);
    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    const getLatLong = (mapAddress) => {
        return mapAddress?.split(",").map((item) => parseFloat(item));
    }

    
    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12 bg-gray-100 p-10 ">
                    <h2 className="font-semibold text-lg md:text-xl my-4">About This Place</h2>
                    <div className="flex justify-between items-center">
                        <h4 className="text-lg font-medium">Menu</h4>
                        <Link to={`/restuarant/${id}/menu`}>
                            <span className="flex item-center gap-1 text-app-400 my-1">
                                See all menus <IoMdArrowDropright className="my-1"/> </span>
                        </Link>
                    </div>
                        <div className="flex flex-wrap gap-3 my-4">
                            <MenuCollection 
                            menuTitle="Menu" pages="3"
                             image={menuImage}
                              />
                        </div>
                        <h4 className="text-lg font-medium mt-20 mb-2">Cuisines</h4>
                        <div className="flex flex-wrap gap-2">
                            {reduxState?.cuisine.map(data => (<span className="border border-gray-200 text-cyan-400 px-2 py-1 rounded-full">
                                {data}
                                </span>))}                     
                             </div>

                        <h4 className="text-lg font-medium mt-10 mb-4">Average Cost</h4>
                        <div className="">
                            <h6>{reduxState?.averageCost} for one order(approx.)</h6>
                            <small className="text-gray-500">Exculsive of applicable taxes and charges, if any</small>
                        </div>
                        <div>
                            <h4 className="text-lg font-medium mt-10 mb-4">Similar Restuarant</h4>
                            <Slider {...settings}>
                                <MenuSimilarRestuarantCard 
                                image="https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png" 
                                title="Burger" />
                                <MenuSimilarRestuarantCard 
                                image="https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png" 
                                title="Burger" />
                                <MenuSimilarRestuarantCard 
                                image="https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png" 
                                title="Burger" />
                                <MenuSimilarRestuarantCard 
                                image="https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png" 
                                title="Burger" />
                            </Slider>
                        </div>

                        <div className="mt-14">
                            <h4 className="text-lg font-medium">Rate your delivery experience</h4>
                            <ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
                            {Reviews.map((reviewData) => (
                                <ReviewCard {...reviewData} />
                            ))}
                        </div>
                        
                        <div className="my-4 md:hidden flex flex-col gap-4 w-full ">
                            <MapView title={reduxState?.name} phno={`+91${reduxState?.contactNumber}`}
                            mapLocation={getLatLong(reduxState?.mapLocation)} 
                            address={reduxState?.address} />
                        </div>

                        <div className="flex flex-col gap-4 mt-10">
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                        </div>
                   
                </div>


                <aside style={{height: "fit-content"}} 
                    className="hidden md:flex md:w-4/12 sticky top-2 right-4 
                bg-white p-3 shadow-md rounded-xl absolute flex flex-col gap-4">
                    
                    <MapView title={reduxState?.name} phno={`+91${reduxState?.contactNumber}`}
                     mapLocation={getLatLong(reduxState?.mapLocation)} 
                     address={reduxState?.address} />
                        
                </aside>
            </div>
        </>
    )
}

export default Overview;