import joi from "joi"

export const ValidateSignUp = (userData) => {
    const Schema = joi.object({
        fullname: joi.string().required().min(5), // joi will check whether it is string or not
        email: joi.string().email().required(),  //also checks syntax of email
        password: joi.string().min(5),
        address: joi.array().items(joi.object({ detail: joi.string(), for: joi.string() })), 
        //address is an array in schema
        phoneNumber: joi.number()
    })

    return Schema.validateAsync(userData)
}

export const ValidateSignIn = (userData) => {
    const Schema = joi.object({
        email: joi.string().email().required(),  //also checks syntax of email
        password: joi.string().min(5).required()
        
    })

    return Schema.validateAsync(userData)
}