import React from "react";
import Slider from "react-slick"

//components
import PictureCarousalCard from "../PictureCarousal";

const NightLifeCarousal = () => {

    const settings = {
        dots: true,
       // arrows: true,
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        slidesToScroll: 1,
        //nextArrow: <NextArrow />,
        //prevArrow: <PrevArrow />
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
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
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
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

export default NightLifeCarousal;