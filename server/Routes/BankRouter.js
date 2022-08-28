const { Register, Login, OrgRegistration } = require('../controller/AuthController');
const { addProduct, getCardDetails, getMyProducts, getOrders, getSupplierOrders, deliverOrder } = require('../controller/OrgController');
const auth = require("../middleware/auth");
const router = require('express').Router();
const multer = require('multer');
const { addCard, handleCheckOut, getCardInfo } = require('../controller/BankController');
const { getNoUsers, adminLogin, getRequests, getProductDetails, updateProduct, deleteProduct, getTransactions, updateTransactionsDelivery, proceedToBank, postOrder } = require('../controller/AdminController');
const { getLandingData, addToWishList, getWishlist } = require('../controller/LandingController');
router.post('/getcard', getCardInfo)
module.exports = router;
