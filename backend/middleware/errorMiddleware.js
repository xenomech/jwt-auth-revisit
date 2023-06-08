const notFound = (req, res, next) => {
    const err = new Error(`The resuseted url not found ${req.originalUrl}`)
    res.status(404);
    next(err)
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;
    res.status(statusCode).json({
        message
    })
}


export { notFound, errorHandler }