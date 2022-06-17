import React from "react";
import { Routes,Route } from "react-router-dom";

//Layout
import CheckoutLayout from "../Layout/Checkout.Layout";

const CheckoutHoc = ({component: Component,path, ...rest}) => {
    return (
    <>
        <Routes>
        <Route 
        {...rest}
        path={path}
         element={
            <CheckoutLayout>
                <Component /> 
            </CheckoutLayout>
         }
         
        />
        
        </Routes>    
    </>
    );
}

export default CheckoutHoc;