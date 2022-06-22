import joi from "joi"

export const ValidateUserID = (userID) => {
    const Schema = joi.object({
        _id: joi.string().required(),
        
    })

    return Schema.validateAsync(userID)
}