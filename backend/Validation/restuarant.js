import joi from "joi"

export const ValidateRestuarantObject = (restuarantObj) => {
    const Schema = joi.object({
        name: joi.string().required(),
        city: joi.string().required(),
        address: joi.string().required(),
        mapLocation: joi.string().required(),
        cuisine: joi.array().items(joi.string()),
        restuarantTimings: joi.string(),
        contactNumber: joi.number(),
        website: joi.string(),
        popularDishes: joi.array().items(joi.string()),
        averageCost: joi.number(),
        amenties: joi.array().items(joi.string()),
        menuImages: joi.string(),
        menu: joi.string(),
        reviews: joi.string(),
        photos: joi.string()  
    })

    return Schema.validateAsync(restuarantObj)
}

export const ValidateRestuarantCity = (city) => {
    const Schema = joi.object({
        city: joi.string().required(),
        
    })

    return Schema.validateAsync(city)
}

export const ValidateRestuarantSearchString = (search) => {
    const Schema = joi.object({
        searchString: joi.string().required(),
        
    })

    return Schema.validateAsync(search)
}
