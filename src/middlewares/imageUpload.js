const multer = require('multer');

const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    let path = `./public/images${req.url}`
    cb(null, path)
  },
  filename: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload an image"))
    }
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '.' + file.originalname.split('.').pop();
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const imageUpload = multer({
  limits: { fileSize: 1 * 1024 * 1024 },
  storage: fileStorage
})

module.exports = imageUpload; 