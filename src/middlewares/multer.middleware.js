import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) //giving file its orignal name is not a good practice cause there could be chances of same file uplode with same name
    }
})

export const upload = multer({
     storage, 
    })