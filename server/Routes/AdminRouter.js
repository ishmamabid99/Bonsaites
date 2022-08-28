const auth = require("../middleware/auth");
const router = require('express').Router();
const { getNoUsers, adminLogin, getRequests, getProductDetails, updateProduct, deleteProduct, getTransactions, updateTransactionsDelivery, proceedToBank, postOrder } = require('../controller/AdminController');

router.get('/getnousers', auth, getNoUsers);
router.get('/getrequests', auth, getRequests);
router.get('/getproductdetails/:id', getProductDetails)
router.get('/gettransacations', auth, getTransactions);

router.post('/updatedelivery', auth, updateTransactionsDelivery);
router.post('/adminlogin', adminLogin)
router.post('/adminupdate', auth, updateProduct);
router.post('/deleteproduct', auth, deleteProduct)
router.post('/postorder', auth, postOrder);
router.post('/proceedbank', auth, proceedToBank);
module.exports = router;
