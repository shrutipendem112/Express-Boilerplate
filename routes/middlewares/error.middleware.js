const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500: res.statusCode;
    res.status(statusCode);
    res.json({
        code: statusCode,
        remark: err.message,
        stackTrace: process.env.ENVIRONMENT === 'development' ? err.stack : null
    })
}

const notFound = (req, res, next) => {
    const err = new Error(`Not found - ${req.orginalUrl}`)
    res.status(404);
    next(err);
}

export {errorHandler, notFound}