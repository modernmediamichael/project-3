import express from 'express'
import asyncHandler from 'express-async-handler'
import Product from '../../models/productModel.js'
import productsController from "../../controllers/productsController.js";

const router = express.Router()

// @desc Fetch all products
// @desc GET /api/products
// @access Public
router.get('/', asyncHandler(async(req,res) => {
    const products = await Product.find({})

    res.json(products)
}))

router.get('/', (req,res)=>{
    res.json(products)
})

// @desc Fetch single products
// @desc GET /api/products/:id
// @access Public
router.get('/:id', asyncHandler(async (req,res)=>{
    const product = await Product.findById(req.params.id)

        if(product) {
            res.json(product)
        } else {
            res.status(404)
            throw new Error('Product not found')
        }

    res.json(product)
}))

// @desc Create single products
// @desc POST /api/products/create-product
// @access Only Admin
router.post('/', async (req,res)=>{
    console.log(req.body)

    const product = new Product({
        name: req.body.name,
        price: 0,
        // user: req.user._id,
        image: '/images/sample.jpg',
        brand: req.body.brand,
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample description',
    })
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

router.route("/").get(productsController.findAll).post(productsController.create);

export default router