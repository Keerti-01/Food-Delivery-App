import React from "react";
import Slider from "react-slick"

//components
import PictureCarousalCard from "../PictureCarousal";

const DiningCarousal = () => {

    const settings = {
        dots: true,
       // arrows: true,
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        slidesToScroll: 1,
        //nextArrow: <NextArrow />,
        //prevArrow: <PrevArrow />
    } 

    return <>
        <div className="w-full ">
            <Slider {...settings}>
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
                <PictureCarousalCard />
            </Slider>
            
        </div>
    </>

}

export default DiningCarousal;