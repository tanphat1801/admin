const { Op } = require('sequelize');
const catchAsync = require('../../utils/catchAsync');
const User = require('../models/userModel');
const getInstanceById = require('../../utils/getInstanceById');
const reduceReturnedData = require('../../utils/reduceReturnedData');

exports.renderAllUsers = catchAsync(async (req, res, next) => {
	const users = await User.findAll({
		attributes: ['id', 'name', 'tel', 'address', 'gender', 'birthday'],
		where: {
			role: {
				[Op.ne]: 'admin',
			},
		},
	});

	res.render('users', {
		layout: 'admin.hbs',
		users: reduceReturnedData(users),
	});
});

exports.profile = catchAsync(async (req, res, next) => {
	const id = req.user.id;
	const user = await getInstanceById(User, id, [
		'name',
		'tel',
		'address',
		'gender',
		'birthday',
	]);

	res.json(user);
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
	const users = await User.findAll({where: {
		role: {
			[Op.ne]: 'admin',
		},
	},});
	
	res.json(users);
});
