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
	res.render('change-password', { loggedIn: true });
};

exports.renderCart = (req, res, next) => {
	const loggedIn = req.cookies.jwt || undefined;
	res.render('shopping-cart', { loggedIn });
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
	const loggedIn = req.cookies.jwt || undefined;

	res.render('index', {
		blogs: [...req.blogLimits],
		products: req.products,
		loggedIn,
	});
};
