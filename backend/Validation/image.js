import joi from "joi"

export const ValidateImage = (files) => {
    const Schema = joi.object({
        file: joi.array().items(joi.image()).required()
        
    })

    return Schema.validateAsync(files)
}
