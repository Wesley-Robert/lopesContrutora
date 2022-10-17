const multer = require('multer');

module.exports = (multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, './upload');
        },
        filename: (req, file, callback) => {
            callback(null, file.originalname);
        }
    }),
    fileFilter: (req, file, callback) => {
        const extension = ['image/png','image/jpg','image/jpeg'].find( format => format === file.mimetype);

        if(extension){
            return callback(null, true)
        }

        return callback(null, false)
    }
}));