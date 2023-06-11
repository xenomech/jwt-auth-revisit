import jwt from 'jsonwebtoken'

const genToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
    res.clearCookie('jwt')
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        macAge: 30 * 24 * 60 * 60 * 1000
    })
}

export default genToken