const asuncHandler = (requsetHandler) => {
    (req, res, next) => {
        Promise.resolve(requsetHandler(req,res,next)).catch((err) => next(err))
    }

}


export { asuncHandler }


// when u write in try catch type code
// const asyncHandler = (fn) => async (req, res, next) {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })

//     }
// }