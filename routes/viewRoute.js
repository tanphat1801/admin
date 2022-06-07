const express = require('express');
const { renderBlogsLimit } = require('../src/controllers/blogController');
const { renderAllProducts } = require('../src/controllers/productController');
const { profile } = require('../src/controllers/userController');
const { protect } = require('../src/controllers/authController');

const {
	signUp,
	login,
	homePage,
	changePassword,
	renderCart,
} = require('../src/controllers/viewController');

const router = express.Router();

router.get('/register', signUp);
router.get('/login', login);
router.get('/change-password', protect, changePassword);
router.get('/profile', protect, profile);
router.get('/shopping-cart', protect, renderCart);
router.get('/', renderAllProducts, renderBlogsLimit, homePage);

module.exports = router;
