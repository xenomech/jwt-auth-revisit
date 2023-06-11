import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import genToken from '../lib/genToken.js'
import bcrypt from 'bcryptjs'
/**
 * @author Gokul Suresh
 * @description Authenticate user -> set token -> login
 * @access Public
 * @route POST /api/users/login
 */
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        if (await bcrypt.compare(password, user.password)) {
            genToken(res, user._id);
            res.status(201).json({
                _id: user._id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email
            });
        } else {
            res.status(401);
            throw new Error('Invalid username/password')
        }
    } else {
        res.status(404);
        throw new Error('user does not exist')
    }
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
        genToken(res, newUser._id);
        res.status(201).json({
            _id: newUser._id,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email
        });
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
    // res.clearCookie('jwt') // in this case the path should be same
    res.cookie('jwt', "", {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({ message: 'user logged out' })
})

/**
 * @author Gokul Suresh
 * @description Get user profile
 * @access Protected
 * @route GET /api/users/profile
 */
const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        id: req.user._id,
        first_name: req.user.first_name,
        last_name: req.user.last_name,
    }
    res.status(200).json(user)
})
/**
 * @author Gokul Suresh
 * @description update user profile
 * @access Protected
 * @route PATCH /api/users/profile
 */
const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        user.first_name = req.body.first_name || user.first_name;
        user.last_name = req.body.last_name || user.last_name;
        if (req.body.password) {
            user.password = req.body.password
            res.cookie('jwt', "", {
                httpOnly: true,
                expires: new Date(0)
            })
            res.status(200).json({ message: 'Please log back in with the new password' })
        }
        const newUser = await user.save();

        res.status(200).json({
            id: newUser._id,
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email
        })
    } else {
        res.status(404);
        throw new Error('user not found')
    }
    res.status(200).json({ message: 'update the user data' })
})






export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile }