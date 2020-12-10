const router = require("express").Router();
const productsRoutes = require("../productRoutes");
const imageRoutes = require('./image')

router.use("/products", productRoutes);
router.use("/uploads", imageRoutes)

module.exports = router;