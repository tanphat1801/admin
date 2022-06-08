const express = require('express');

const { protect, restrictTo } = require('../src/controllers/authController');

const {
	createBlog,
	renderAllBlog,
	updateBlog,
	deleteBlog,
} = require('../src/controllers/blogController');

const router = express.Router({ mergeParams: true });
router
	.route('/')
	.get(renderAllBlog)
	.post(protect, restrictTo('admin'), createBlog);

router
	.route('/:id')
	.patch(protect, restrictTo('admin'), updateBlog)
	.delete(protect, restrictTo('admin'), deleteBlog);

module.exports = router;
