import React from "react"
import classnames from "classnames"

const InfoButtons = (props) => {
    return <>
        <button className={classnames(
            "flex items-center gap-1 border border-app-400 px-4 py-2 rounded-lg ",
            {
                "text-white bg-app-400" : props.isActive,
            }
        )} >
             {props.children}
        </button>

    

    </>
}

export default InfoButtons;