const router = require("express").Router();
const productsRoutes = require("../productRoutes");

router.use("/products", productRoutes);

module.exports = router;