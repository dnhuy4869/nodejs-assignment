const multer = require("multer");
const fs = require("fs");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/images")
    },
    filename: function (req, file, cb) {
        //cb(null, Date.now() + '-' + file.originalname)
        if (fs.existsSync("./public/images" + file.originalname)) {
            //cb(null, file.originalname + "(1)")
        } else {
            cb(null, file.originalname)
        }
    }
})

var upload = multer({ storage: storage });

module.exports = { upload };