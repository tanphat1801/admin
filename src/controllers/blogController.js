const catchAsync = require('../../utils/catchAsync');
const Blog = require('../models/blogModel');
const checkRequiredFields = require('../../utils/checkRequiredFields');
const AppError = require('../../utils/appError');
const uploadImage = require('../../utils/uploadImage');
const getInstanceById = require('../../utils/getInstanceById');
const reduceReturnedData = require('../../utils/reduceReturnedData');

exports.createBlog = catchAsync(async (req, res, next) => {
	if (req.files.image) {
		req.body['image'] = req.files.image;
	}
	checkRequiredFields(
		req.body,
		['image', 'title', 'description', 'url'],
		'create-blog'
	);

	const blogData = req.body;
	blogData.image = await uploadImage(req.files.image);
	const blog = await Blog.create(req.body);
	res.json(blog);
});

exports.renderAllBlog = catchAsync(async (req, res, next) => {
	const blogs = await Blog.findAll();
	const admin = req.originalUrl === '/admin/blogs' || undefined;

	if (admin) {
		res.render('blogs', {
			layout: 'admin.hbs',
			blogs: reduceReturnedData(blogs),
			admin,
		});
	} else {
		res.render('blogs', { blogs, admin });
	}
});

exports.renderBlogsLimit = catchAsync(async (req, res, next) => {
	const blogs = await Blog.findAll({
		limit: 5,
	});
	req['blogLimits'] = reduceReturnedData(blogs);
	next();
});

exports.updateBlog = catchAsync(async (req, res, next) => {
	if (req.files.image) {
		req.body['image'] = await uploadImage(req.files.image);
	}
	const blog = await getInstanceById(Blog, req.params.id);

	blog.update(req.body);
	await blog.save();

	res.json(blog);
});

exports.deleteBlog = catchAsync(async (req, res, next) => {
	const blog = await getInstanceById(Blog, req.params.id);

	await blog.destroy();
	const blogs = await Blog.findAll();
	console.log(blogs)
	res.json(blogs);
});
