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
	.patch(protect, restrictTo('admin'), updateUser)
	.delete(protect, restrictTo('admin'), deleteUser);
router.get('*', (req, res) => {
	res.send(req.url);
});

module.exports = router;
