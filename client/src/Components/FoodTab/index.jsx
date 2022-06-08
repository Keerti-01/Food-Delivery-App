import React from "react"
import {RiShoppingBag3Line} from "react-icons/ri"
import {IoFastFoodOutline} from "react-icons/io5"
import {BiDrink} from "react-icons/bi"
import {IoNutritionOutline} from "react-icons/io5"

//for mobile and tablet view
const MobileTabs = () => {
    return (
        <>
            <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full 
            flex items-center justify-between md:justify-evenly text-gray-700 border border-gray-400">
                <div className="flex flex-col items-center text-xl">
                    <RiShoppingBag3Line />
                    <h5 className="text-lg">Delivery</h5>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <IoFastFoodOutline />
                    <h5 className="text-lg">Dining Out</h5>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <BiDrink />
                    <h5 className="text-lg">Night Life</h5>
                </div>
                <div className="flex flex-col items-center text-xl">
                    <IoNutritionOutline />
                    <h5 className="text-lg">Nutrition</h5>
                </div>
            </div>
        </>
    )
}

//for pc view
const LargeTabs = () => {
    return (
        <>
            <div className="hidden lg:flex gap-14 container px-20 mx-auto my-12">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 p-2 rounded-full ">
                        <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                        alt="delivery" className="w-full h-full "/>
                    </div>
                    <h3 className="text-xl text-gray-600 ">Delivery</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 p-2 rounded-full ">
                        <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                        alt="delivery" className="w-full h-full "/>
                    </div>
                    <h3 className="text-xl text-gray-600 ">Dining Out</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 p-2 rounded-full ">
                        <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                        alt="delivery" className="w-full h-full "/>
                    </div>
                    <h3 className="text-xl text-gray-600 ">NightLife</h3>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 p-2 rounded-full ">
                        <img src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
                        alt="delivery" className="w-full h-full "/>
                    </div>
                    <h3 className="text-xl text-gray-600 ">Nutrition</h3>
                </div>
            </div>
        </>
    )
}

const FoodTab = () => {
    return (
        <>
            <div>
                <MobileTabs />
                <LargeTabs />
            </div>
        </>
    )
}

export default FoodTab;