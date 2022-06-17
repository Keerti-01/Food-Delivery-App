import React from "react"
import {BsShieldLockFill} from "react-icons/bs"

//component
import FoodItem from "../Components/Cart/FoodItem"
import AddressList from "../Components/Checkout/AddressList"

const Checkout = () => {

    const address = [
        {
          name: "Home",
          address: "India",
        },
        {
          name: "Gym",
          address: "India",
        },
        {
          name: "Office",
          address: "India",
        },
      ];
    return(
        <>
            <div className="flex flex-col gap-3 my-10 items-center">
            <h1 className="text-xl md:text-2xl font-bold text-center">Checkout</h1>
            
            <div className="flex flex-col items-center bg-gray-50 md:w-3/5 w-full 
            rounded-lg shadow-lg py-3">
                <h3 className="text-lg font-semibold">Summary</h3>
                <div className="flex flex-col items-center w-full">
                    <h5 className="text-base tracking-wider">ORDER FROM</h5>
                    <div className="flex flex-col items-center text-gray-500">
                        <h4>Dominos Pizza</h4>
                        <small>Gandhi Nagar</small>
                    </div>
                    <div className="flex flex-col gap-2 w-full my-4 px-4 md:w-3/5">
                        <FoodItem name="Pizza" quantity={3} price={300} />
                        <FoodItem name="Pizza" quantity={3} price={300} />
                        <FoodItem name="Pizza" quantity={3} price={300} />
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-3/5">
                        <h4 className="text-xl font-semibold">Choose Address</h4>
                        <AddressList address={address}/>
                    </div>
                    
            </div>
                <button className="w-full px-4 md:w-4/5 my-4 md:my-8 h-12 flex items-center gap-2
                font-medium text-white bg-app-400 rounded-lg justify-center
                    ">Pay Securely <BsShieldLockFill /> </button>
                </div>
            </div>
        </>
    )
}

export default Checkout;