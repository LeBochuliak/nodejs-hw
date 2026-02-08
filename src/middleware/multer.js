import multer from 'multer';

export const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const isImage = file.mimetype?.startsWith('image/');
    if (isImage) {
      cb(null, true);
    } else {
      cb(new Error('Only images allowed'), false);
    }
  },
});
