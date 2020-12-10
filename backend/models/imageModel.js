import mongoose from 'mongoose'
const Schema = mongoose.Schema

const ImageSchema = new Schema({
    imageName: {
        type: String,
        default: "none",
        required: true
    },
    imageData: {
        type: String,
        required: true
    }
})

var Image = mongoose.model('Image', ImageSchema)

export default Image