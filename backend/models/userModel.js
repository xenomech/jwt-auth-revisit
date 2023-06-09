import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const userSchemea = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

const User = mongoose.model('User', userSchemea)

export default User