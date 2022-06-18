import React ,{useEffect} from "react"
import {useParams} from "react-router-dom"
import {useDispatch} from "react-redux"

//components
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import NightLife from "../Components/NightLife";
import Nutrition from "../Components/Nutrition";

//redux actions
import { getRestuarant } from "../Redux/Reducer/restuarant/restuarant.action";

const Home = () => {

    const { type } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestuarant())
    }, [])
    return (
        <> 
        <div className="my-6">
            { type === "delivery" && <Delivery /> }
            { type === "dining" && <Dining /> }
            { type === "night" && <NightLife /> }
            { type === "nutrition" && <Nutrition /> }
        </div>
        </>

    )
}

export default Home;