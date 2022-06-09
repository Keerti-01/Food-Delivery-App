import React from "react";

export const NextArrow = (props) => {
    return (
        <div 
            className={props.className} 
            style={{...props.style, backgroundColor: "#ffb3c5"}} 
            onClick={props.onClick}
        />
    )
}

export const PrevArrow = (props) => {
    return (
        <div 
            className={props.className} 
            style={{...props.style, backgroundColor: "#ffb3c5"}} 
            onClick={props.onClick}
        />
    )
}