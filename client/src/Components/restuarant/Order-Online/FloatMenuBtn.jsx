import React,{useState} from "react"
import {HiMenu} from "react-icons/hi"
import {MdClose} from "react-icons/md"

//components
import MenuListContainer from "./MenuListContainer"

const FloatMenuBtn = () => {

    const [isClicked, setIsClicked] = useState(false)

    const toggleMenu = () => setIsClicked(!isClicked)
    return(
        <>
        <div className="fixed z-30 bottom-4 right-2 md:hidden w-8/12 flex flex-col items-end gap-3">
            {isClicked && (
                <div className=" p-3 h-48 bg-white overflow-y-scroll">
                    <MenuListContainer />
                </div>
            )}
            
        <button 
            onClick={toggleMenu}
         className="fixed z-30 bottom-2  flex items-center gap-2 
        right-8 md:hidden text-white bg-app-400 px-3 py-2 rounded-full">

            {isClicked ? <MdClose /> : <HiMenu />}Menu
            
        </button>
        </div>
        </>
    )
}

export default FloatMenuBtn;