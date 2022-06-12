import React from "react";
import { Routes,Route } from "react-router-dom";

//Layout
import RestuarantLayout from "../Layout/Restuarant.layout";

const RestuarantHoc = ({component: Component,path, ...rest}) => {
    return (
    <>
        <Routes>
        <Route 
        {...rest}
        path={path}
         element={
            <RestuarantLayout>
                <Component /> 
           </RestuarantLayout>
         }
            
         
         
        />
        
        </Routes>    
    </>
    );
}

export default RestuarantHoc;