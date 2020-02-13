import multer from 'multer';
const storage = multer.diskStorage({
    destination: function (req, file, next) {
        next(null, '../client/public/images')
    }, filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    cb(null, true);
    cb(null, false)
};
export const upload = multer({
    storage: storage,
    limits: { file: 1024 * 1024 * 5 },
    fileFilter: fileFilter,
}).single('path');