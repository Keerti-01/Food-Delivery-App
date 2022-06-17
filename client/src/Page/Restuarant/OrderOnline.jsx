import React from "react"
import {AiOutlineCompass} from "react-icons/ai"
import {BiTimeFive} from "react-icons/bi"

//components
import FloatMenuBtn from "../../Components/restuarant/Order-Online/FloatMenuBtn";
import MenuListContainer from "../../Components/restuarant/Order-Online/MenuListContainer";
import FoodList from "../../Components/restuarant/Order-Online/FoodList";

const OrderOnline = () => {
    return (
        <>
            <div className="w-full flex h-screen overflow-hidden">
                <aside className="hidden md:flex flex-col gap-3 border-r border-gray-400 
                 h-screen w-1/4 overflow-auto  ">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full md:w-3/4 md:mx-6 px-3 ">
                    <div className="pl-3 mb-4">
                        <h2 className="text-xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                        <AiOutlineCompass /> Live Track Your Order! <BiTimeFive /> 45 min
                        </h4>
                    </div>

                    <section className="mt-6 flex flex-col gap-3 h-screen hover:overflow-auto md:gap-5">
                        <FoodList title="Recommended" 
                        items={[
                            {
                                price:"1000",
                                rating: 3, 
                                description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat fugit vitae officiis soluta animi ipsum et, tempora vel, natus quae quam labore, consectetur consequatur placeat non quisquam vero! Distinctio, accusantium?",
                                title:"Andhra Mutton Biriyani",
                                image:
                                    "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png"
                            },{
                                price:"1000",
                                rating: 3, 
                                description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat fugit vitae officiis soluta animi ipsum et, tempora vel, natus quae quam labore, consectetur consequatur placeat non quisquam vero! Distinctio, accusantium?",
                                title:"Andhra Mutton Biriyani",
                                image:
                                    "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png"
                          
                            }
                        ]}
                        />
                        <FoodList title="Pizza" 
                        items={[
                            {
                                price:"1000",
                                rating: 3, 
                                description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat fugit vitae officiis soluta animi ipsum et, tempora vel, natus quae quam labore, consectetur consequatur placeat non quisquam vero! Distinctio, accusantium?",
                                title:"Andhra Mutton Biriyani",
                                image:
                                    "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png"
                            },{
                                price:"1000",
                                rating: 3, 
                                description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat fugit vitae officiis soluta animi ipsum et, tempora vel, natus quae quam labore, consectetur consequatur placeat non quisquam vero! Distinctio, accusantium?",
                                title:"Andhra Mutton Biriyani",
                                image:
                                    "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png"
                          
                            }
                        ]}
                        />
                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    )
}

export default OrderOnline;