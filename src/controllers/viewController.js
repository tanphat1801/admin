exports.signUp = (req, res, next) => {
	if (req.cookies.jwt) {
		return res.redirect('http://localhost:3000');
	}
	res.render('register');
};

exports.login = (req, res, next) => {
	if (req.cookies.jwt) {
		return res.redirect('http://localhost:3000');
	}
	res.render('login');
};

exports.changePassword = (req, res, next) => {
	if (!req.cookies.jwt) {
		return res.redirect('http://localhost:3000/login');
	}
	res.render('change-password');
};

exports.renderCart = (req, res, next) => {
	res.render('shopping-cart');
};

exports.renderAllUsers = (req, res, next) => {
	res.render('users', { layout: 'admin.hbs', users: req.users });
};

exports.renderAllUsers = (req, res, next) => {
	res.render('users', { layout: 'admin.hbs', users: req.users });
};

exports.renderAllUsers = (req, res, next) => {
	res.render('users', { layout: 'admin.hbs', users: req.users });
};

exports.homePage = (req, res, next) => {
	res.render('index', {
		blogs: [...req.blogLimits],
		products: req.products,
		admin: true,
	});
};
