import React,{useState} from "react"
import Rating from "react-rating-stars-component"

//component
import ReviewModal from "./ReviewModal"

const AddReviewCard = () => {

    const handleRating = (value) => console.log(value)
    const [isOpen, setIsOpen] = useState(true)

    const openModal = () => setIsOpen(true)

    return(
        <>
        <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <h3 className="text-xl font-medium">Rate your Experience for</h3>
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2 text-base text-gray-500">
                        <input type="radio" name="review" id="dining" />
                        <label htmlFor="dining">Dining</label> 
                    </div>
                    <div className="flex items-center gap-2 text-base text-gray-500">
                        <input type="radio" name="review" id="delivery" />
                        <label htmlFor="delivery">Delivery</label> 
                    </div>
                </div>
                <div>
                    <Rating count={5} onChange={handleRating} size={24} />
                </div>

                <button onClick={openModal} className="text-app-400">Write a review</button>
                         
                
        </>
    )
}

export default AddReviewCard;