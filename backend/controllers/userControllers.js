import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
/**
 * @author Gokul Suresh
 * @description Authenticate user -> set token -> login
 * @access Public
 * @route POST /api/users/login
 */
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'login' })
})

/**
 * @author Gokul Suresh
 * @description Register user
 * @access Public
 * @route POST /api/users
 */
const registerUser = asyncHandler(async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        res.status(400);
        throw new Error('user exist')
    }

    const newUser = await User.create({ first_name, last_name, email, password })
    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email
        })
    } else {
        res.status(400);
        throw new Error('Invalid Data')
    }
})

/**
 * @author Gokul Suresh
 * @description logout
 * @access Public
 * @route POST /api/users/logout
 */
const logoutUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'logout' })
})

/**
 * @author Gokul Suresh
 * @description Get user profile
 * @access Protected
 * @route GET /api/users/profile
 */
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'this is the user' })
})
/**
 * @author Gokul Suresh
 * @description update user profile
 * @access Protected
 * @route PATCH /api/users/profile
 */
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'update the user data' })
})






export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }