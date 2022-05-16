const { Register, Login, OrgRegistration } = require('../controller/AuthController');
const auth = require("../middleware/auth");
const router = require('express').Router();


router.post('/register', Register)
router.post('/login', Login);
router.post('/register-org', OrgRegistration);
module.exports = router;