const { Register, Login, OrgRegistration } = require('../controller/AuthController');
const { addProduct } = require('../controller/OrgController');
const auth = require("../middleware/auth");
const router = require('express').Router();
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const upload = multer({ storage: storage })
router.post('/register', Register)
router.post('/login', Login);
router.post('/register-org', OrgRegistration);
router.post('/add-product', upload.single('productImage'), auth, addProduct)
module.exports = router;