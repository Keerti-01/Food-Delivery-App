import React,{useState} from "react"
import {IoMdArrowDropdown, IoMdArrowDropup,
     IoMdArrowDropright } from "react-icons/io"
import {IoCloseSharp} from "react-icons/io5"

//componets
import FoodItem from "./FoodItem"


const CartSM = ({toggle}) => {
    return(
        <>
        <div className="flex items-center justify-between md:hidden px-4 ">
            <div className="flex flex-col items-start">
                <small onClick={toggle}
                className="flex items-center gap-1">
                    1 Item <IoMdArrowDropup />
                </small>
                <h4>₹300 <sub>(plus tax)</sub></h4>
            </div>
            <button className="flex items-center text-white gap-1 bg-app-400 px-2 py-1 rounded-lg">
                Continue <IoMdArrowDropright />
            </button>
            </div>
        </>
    )
}

const CartLG = ({toggle}) => {
    return(
        <>
        <div className="flex items-center justify-between hidden md:flex container px-40 mx-auto">
            <div className="flex gap-2 items-start">
                <span onClick={toggle}
                 className="border border-gray-300 p-1 bg-white rounded">
                     <IoMdArrowDropup /> 
                </span>
                <h4>Your Orders (1)</h4>
                
            </div>
            <div className="flex items-center gap-2">
                <h4 className="text-xl">Subtotal ₹300 <sub>(plus tax)</sub></h4>
                <button className="flex items-center text-lg font-light h-10 
                text-white gap-1 bg-app-400 px-2 py-1 rounded-lg">
                     Continue <IoMdArrowDropright />
                </button>
            </div>
            </div>
        </>
    )
}

const CartContainer = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleCart = () => setIsOpen((prev) => !prev)
    const closeCart = () => setIsOpen(false)
    return(
        <>
        
        {
            isOpen && (
                <div className="fixed w-full bg-white z-10 bottom-16 md:bottom-14 py-3 px-5 h-48 
                overflow-y-scroll ">
                    <div className="flex items-center justify-between ">
                    <h3 className="text-xl font-semibold">Your Orders</h3>
                        <IoCloseSharp onClick={closeCart} />
                    </div>
                    <hr className="mx-4 my-2"/>
                    <div className="flex flex-col gap-2 ">
                        <FoodItem name="Pizza" quantity="3" price="300" />
                        <FoodItem name="Pizza" quantity="3" price="300" />
                        <FoodItem name="Pizza" quantity="3" price="300" />
                        <FoodItem name="Pizza" quantity="3" price="300" />
                        <FoodItem name="Pizza" quantity="3" price="300" />
                     </div>
                </div>
            )
        }

        <div className="fixed w-full bg-white z-10 bottom-0 p-2">
            <CartSM toggle={toggleCart} />
            <CartLG toggle={toggleCart} />
        </div>

        </>
    )
}

export default CartContainer;