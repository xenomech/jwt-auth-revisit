import express from "express"
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router()
/**
 * @author Gokul Suresh
 * @description Routes attached to /api/users
 */

router.post('/', registerUser)
router.post('/login', authUser)
router.post('/logout', logoutUser)
//same route with different methods 👇 can be written seperately also
router.route('/profile').get(protect, getUserProfile).patch(protect, updateUserProfile)

export default router;