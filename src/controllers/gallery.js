const fs = require('fs');

exports.postGalleryImages = async (req, res) => {
  if (!req) return res.sendStatus(400)
  res.sendStatus(200)
}



exports.deleteGalleryImages = async (req, res) => {
  try {
    let images = req?.body?.images;
    if (!images) return res.sendStatus(400)
    images.forEach(async (image) => {
      fs.unlink(`./public/images/gallery/${image}`, (err) => {
        console.log({ err })
        if (err) throw err;
      }
      )
    }
    )
    res.sendStatus(200)
  } catch (e) {
    res.sendStatus(500)
  }

}

exports.getGalleryImages = (req, res) => {
  try {
    let images = fs.readdirSync(`./public/images/gallery`)
    images = images.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));//removes hidden files
    res.send(images)
  } catch (e) {
    res.sendStatus(500)
  }
}