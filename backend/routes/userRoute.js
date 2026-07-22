import express from "express"

import { register, verify, reVerify, login, logout, forgotPassword } from "../controllers/userController.js"
import {isAuthenticated} from "../middleware/isAuthenticated.js"

const router = express.Router()

router.post("/register", register)
router.post("/verify", verify)
router.post("/reVerify", reVerify)
router.post("/login", login)
router.post("/logout", isAuthenticated, logout)
router.post("/forgot-password", forgotPassword)

export default router