const catchAsync = require('../../utils/catchAsync');

exports.renderAllUsers = catchAsync(async (req, res, next) => {
	res.render('users', { layout: 'admin.hbs', users: req.users });
});

exports.renderAllProducts = catchAsync(async (req, res, next) => {});

exports.renderAllBlogs = catchAsync(async (req, res, next) => {});
