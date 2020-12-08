import mongoose from 'mongoose'
// import Review from './reviewModel.js'

const productSchema = mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required:false,
    //     ref: 'User'
    // },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
    },
    brand: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    shortDescription: {
        type: String,
        required: false
    },
    longDescription: {
        type: String,
        required: false
    },
    // reviews:[Review],
    rating: {
        type: Number,
        required: false,
        default: 0
    },
    numReviews: {
        type: Number,
        required: false,
        default: 0
    },
    price: {
        type: Number,
        required: false,
        default: 0
    },
    countInStock: {
        type: Number,
        required: false,
        default: 0
    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product