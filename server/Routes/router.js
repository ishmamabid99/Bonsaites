const { Register, Login, OrgRegistration } = require('../controller/AuthController');
const { addProduct, getCardDetails } = require('../controller/OrgController');
const auth = require("../middleware/auth");
const router = require('express').Router();
const multer = require('multer');
const { addCard } = require('../controller/BankController');
const { getNoUsers, adminLogin, getRequests, getProductDetails, updateProduct, deleteProduct } = require('../controller/AdminController');
const { getLandingData, addToWishList, getWishlist } = require('../controller/LandingController');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../client/public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const upload = multer({ storage: storage })

router.get('/getnousers', auth, getNoUsers);
router.get('/getrequests', auth, getRequests);
router.get('/admin/getproductdetails/:id', getProductDetails)
router.get('/getcard/:_id', getCardDetails)
router.get('/getproduct', getLandingData);
router.get('/getwishlist/:_id', auth, getWishlist)

router.post('/adminlogin', adminLogin)

router.post('/register', Register)
router.post('/login', Login);

router.post('/addtowishlist', auth, addToWishList);
router.post('/register-org', OrgRegistration);
router.post('/add-product', upload.single('productImage'), auth, addProduct)
router.post('/add-card', auth, addCard)
router.post('/adminupdate', auth, updateProduct);
router.post('/deleteproduct', auth, deleteProduct)
module.exports = router;
