const multer = require('multer');

const imageUpload = multer({
  limits: {
    fileSize: 500000
  },
  fileFilter(req, file, cb) {
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
      return cb(new Error("Please upload an image"))
    }
    cb(undefined, true)
  }
})

module.exports = imageUpload;