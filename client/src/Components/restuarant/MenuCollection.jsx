import React from "react"

const MenuCollection = (props) => {
    return (
        <>
        <div className="w-32 h-32 md:w-48 md:h-48">
            <div className="w-full h-full overflow-hidden rounded-lg">
                <img src={props.image} alt="menu" 
                className="w-full h-full transform transition duration-400 hover:scale-110" />
            </div>
            <strong>{props.menuTitle}</strong>
            <p>{props.pages} pages</p>
        </div>
        </>
    )
}

export default MenuCollection;