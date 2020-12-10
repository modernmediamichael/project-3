import express from 'express'
import Image from '../../models/imageModel.js'
import multer from 'multer'
const imageRouter = express.Router()

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../../uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer ({
    storeage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
})

imageRouter.route("/uploadmulter")
    .post(upload.single('imageData'), (req, res, next) => {
        console.log(req.body)
        const newImage = new Image({
            imageName: req.body.imageName,
            imageData: req.file.path
        })

        newImage.save()
            .then((result) => {
                console.log(result)
                res.status(200).json({
                    success: true,
                    document: result
                })
            })
            .catch((err) => { console.log(err); next(err)})
    })

export default imageRouter