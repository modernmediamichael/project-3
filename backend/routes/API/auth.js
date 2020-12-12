import express from "express"
import authController from "../../controllers/authController.js"

const router = express.Router()

// Matches with "/api/posts"

// Matches with "/api/posts/:id"
router
  .route("/login").post(authController.login).get(authController.authenticate)

export default router;
