import React,{useState} from "react"

//compoent
import ReviewCard from "../../Components/restuarant/Reviews/ReviewCard";
import AddReviewCard from "../../Components/restuarant/Reviews/AddReviewCard";

const Reviews = () => {

    const [reviews, setReviews] = useState(["","",""])

    const handleRating = (value) => console.log(value)

    return(
        <>
        <div className="w-full flex relative flex-col md:flex-row">
            <div className=" w-full md:w-8/12 flex flex-col gap-3 ">
            <div className="md:hidden">
                <AddReviewCard />
            </div>
           {
                reviews.map((review) => (
                <ReviewCard {...review} />
            )) 
           }
            </div>

            <aside style={{ height: "fit-content" }}
                className="hidden md:flex items-start md:w-4/12 sticky top-2 right-4 
                bg-white p-2 shadow-md rounded-xl absolute flex flex-col gap-3 ml-4">

                <AddReviewCard />
                
            </aside>
        </div>
        </>
    )
}

export default Reviews;