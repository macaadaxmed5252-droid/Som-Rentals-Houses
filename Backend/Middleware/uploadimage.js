const multer = require("multer");

const imageLocation = multer.diskStorage({
    destination: (req, File, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage: imageLocation
})

module.exports = upload;