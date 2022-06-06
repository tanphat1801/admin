const { Op } = require('sequelize');
const catchAsync = require('../../utils/catchAsync');
const User = require('../models/userModel');
const getInstanceById = require('../../utils/getInstanceById');
const reduceReturnedData = require('../../utils/reduceReturnedData');

exports.getAllUsers = catchAsync(async (req, res, next) => {
	const users = await User.findAll({
		attributes: ['id', 'name', 'tel', 'address', 'gender'],
		where: {
			role: {
				[Op.ne]: 'admin',
			},
		},
	});
	req['users'] = reduceReturnedData(users);
	next();
});

exports.getUser = catchAsync(async (req, res, next) => {
	const id = req.params.id || req.user.id;
	const user = await getInstanceById(User, id);

	res.send(user);
});

exports.updateUser = catchAsync(async (req, res, next) => {
	const user = await getInstanceById(User, req.params.id);

	user.update(req.body);
	await user.save();

	res.json(user);
});

exports.deleteUser = catchAsync(async (req, res, next) => {
	const user = await getInstanceById(User, req.params.id);

	await user.destroy();
	res.json('deleted');
});
