import joi from "joi"

export const ValidateReviewData = (data) => {
    const Schema = joi.object({
        reviewData: joi.string().required()
    })

    return Schema.validateAsync(data)
}
