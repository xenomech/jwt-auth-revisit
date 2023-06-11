import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
    let token;
    token = req.cookies.jwt;
    // parse the incoming cokiee and decode the jwt and verify before any request to protect it 
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            next();
        } catch (err) {
            res.status(401);
            throw new Error('unauthorised - invalid token')
        }
    } else {
        res.status(401);
        throw new Error('unauthorised - no token')
    }
})

export { protect }