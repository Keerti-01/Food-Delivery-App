import React from "react"

const DeliveryCardSm = ({ image, title}) => {
    return (
        <>
            <div className="bg-white shadow rounded-md md:w-56 lg:hidden w-24">
                <div className="w-full h-24 ">
                    <img src={image} alt={title} className="w-full h-full rounded-t-md  object-cover"  />
                </div>
                <div>
                    <h3 className="text-md my-1 text-center font-medium ">{title}</h3>
                </div>
            </div>
        </>
    )
}

const DeliveryCardLg = ({ image, title}) => {
    return (
        <>
            <div className="hidden lg:block w-64 h-48 ">
                <div className="w-full h-full ">
                    <img src={image} alt={title} className="w-full h-full rounded-md  object-cover shadow-lg"  />
                </div>
                <div>
                    <h3 className="text-md lg:text-xl my-1 font-medium ">{title}</h3>
                </div>
            </div>
        </>
    )
}

const DeliveryCategory = (props) => {
    return (
        <>
            <DeliveryCardSm {...props}/>
            <DeliveryCardLg {...props}/>
        </>
    )
}

export default DeliveryCategory;