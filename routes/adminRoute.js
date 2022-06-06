const express = require('express');
const router = express.Router();
const { renderAllUsers } = require('../src/controllers/adminController');
const { getAllUsers } = require('../src/controllers/userController');

router.get('/', async (req, res, next) => {
	res.redirect('/admin/users');
});

router.get('/users', getAllUsers, renderAllUsers);

router.get('/products', async (req, res, next) => {
	res.render('products', { layout: 'admin.hbs' });
});

router.get('/blogs', async (req, res, next) => {
	res.render('blogs', { layout: 'admin.hbs' });
});

module.exports = router;
