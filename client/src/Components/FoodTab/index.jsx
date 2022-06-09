import React , {useState} from "react"
import { useParams, Link } from "react-router-dom"
import {RiShoppingBag3Line} from "react-icons/ri"
import {IoFastFoodOutline} from "react-icons/io5"
import {BiDrink} from "react-icons/bi"
import {IoNutritionOutline} from "react-icons/io5"

//for mobile and tablet view
const MobileTabs = () => {

    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",  
            icon: <RiShoppingBag3Line />,
            name: "Delivery",
            isActive: false
        },
        {
            id: "dining",
            icon: <IoFastFoodOutline />,
            name: "Dining Out",
            isActive: false
        },
        {
            id: "night",
            icon: <BiDrink />,
            name: "Night Life",
            isActive: false
        },
        {
            id: "nutrition",
            icon: <IoNutritionOutline />,
            name: "Nutrition",
            isActive: false
        }
    ])

    const { type } = useParams();

    return (
        <>
            <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full 
            flex items-center justify-between md:justify-evenly text-gray-700 border border-gray-400">
                
                {
                    allTypes.map((items) => (
                        <Link to={`/${items.id}`}>
                        <div className={
                            type === items.id
                            ? "flex flex-col relative items-center text-xl text-app-500 " : 
                            "flex flex-col items-center text-xl"
                            }>
                            <div className={
                                type === items.id && 
                                "absolute -top-3 border-t-2 border-app-500 w-full"
                            } />
                            {items.icon}
                            <h5 className="text-lg">{items.name}</h5>
                        </div>
                        </Link>
                    ))
                }
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

