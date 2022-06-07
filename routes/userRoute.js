const express = require('express');

const { protect, restrictTo } = require('../src/controllers/authController');

const {
	renderAllUsers,
	updateUser,
	deleteUser,
} = require('../src/controllers/userController');

const router = express.Router({ mergeParams: true });

router.route('/').get(protect, restrictTo('admin'), renderAllUsers);

router
	.route('/:id')
	.put(protect, restrictTo('admin'), updateUser)
	.delete(protect, restrictTo('admin'), deleteUser);

module.exports = router;
