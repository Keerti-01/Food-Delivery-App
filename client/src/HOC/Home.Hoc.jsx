import React from "react";
import { Routes,Route,Navigate } from "react-router-dom";

//Layout
import HomeLayout from "../Layout/Home.Layout";

const HomeLayoutHoc = ({component: Component,path, ...rest}) => {
    return (
    <>
        <Routes>
        <Route 
        {...rest}
        path={path}
         element={
            <HomeLayout>
                <Component /> 
            </HomeLayout>
         }
         
        />
        <Route path="/" element={<Navigate to ="/delivery" />}/>
        </Routes>    
    </>
    );
}

export default HomeLayoutHoc;