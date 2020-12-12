import express from "express"
import productRoutes from "./productRoutes.js"
import imageRoutes from './image.js'
import authRoutes from "./auth.js"
import accountRoutes from "./account.js"
// import cartRoutes from './cart.js'

const router = express.Router()

router.use("/products", productRoutes);
router.use("/uploads", imageRoutes)
router.use("/auth", authRoutes);
router.use("/account", accountRoutes);
// router.use("/cart", cartRoutes)

export default router;