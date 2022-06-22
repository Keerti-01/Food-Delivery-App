import AWS from "aws-sdk"

// AWS S3 Bucket configuraiton
const s3Bucket = new AWS.S3({
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
    region: "ap-south-1"
})

//upload to s3
export const s3Upload = (options) => {
    return new Promise((resolve, reject) =>
     s3Bucket.upload(options, (error, data) => {
        if(error) return reject(error)
        // if success
        return resolve(data)
    }))
}