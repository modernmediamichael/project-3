import userController from '../../controllers/userController.js'
import express from "express"
import expressAsyncHandler from 'express-async-handler';

const router = express.Router()

// Matches with "/api/posts"

// Matches with "/api/posts/:id"
router.route("/").post(userController.register);

export default router;