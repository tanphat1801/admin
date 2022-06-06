const express = require('express');
const router = express.Router();
const userRouter = require('../routes/userRoute');
const productRouter = require('../routes/productRoute');
const blogRouter = require('../routes/blogRoute');

router.get('/', async (req, res, next) => {
	res.redirect('/admin/users');
});

router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/blog', blogRouter);

module.exports = router;
