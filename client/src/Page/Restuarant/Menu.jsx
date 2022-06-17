import React,{useState} from "react"

//componenet
import MenuCollection from "../../Components/restuarant/MenuCollection";

const Menu = () => {

    const [menus, setMenus] = useState([])

    return(
        <>
        <div className="flex flex-wrap gap-3">
        <MenuCollection menuTitle="Menu" pages={menus.length} image={menus} />
            {/* {
                menus.map((menu) => (
                    <MenuCollection {...menu} /> 
                ))
            } */}
        </div>
        </>
    )
}

export default Menu;