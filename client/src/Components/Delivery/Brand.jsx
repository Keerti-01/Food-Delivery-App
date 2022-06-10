import React from "react"
import Slider from "react-slick"

const Brand = (props) => {

    const logos = [
    "https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252598.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/5bfbd8dfec807f55def6257118c7bf67_1600755551.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187721.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/7a7904eff687a7456599074a4e7d2335_1617875100.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/ec72c289aa01d947fe15a009ce8e559f_1616052816.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604383019.png?output-format=webp",
    "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617875125.png?output-format=webp"
    ]

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

    return (<>
        <div className="my-10 mb-10 lg:my-20">
            
            <h1 className="text-2xl font-semibold mb-4 ">Top Brands in Spotlight</h1>
        <Slider {...settings}>
            {logos.map((logo) => (
                <div className="w-32 h-48 mx-10 px-3 bg-white shadow">
                    <img src={logo} alt="brand" className="w-full h-full object-cover" />
                </div>
            ))}
        </Slider>
        </div>
        
    </>)
}

export default Brand;