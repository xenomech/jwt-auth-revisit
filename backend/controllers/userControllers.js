import asyncHandler from 'express-async-handler'

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
    res.status(200).json({ message: 'new user' })
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