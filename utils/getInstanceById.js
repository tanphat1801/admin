const AppError = require('../utils/appError');

module.exports = async (model, id, selectedFields) => {
	const instance = await model.findOne({
		where: {
			id,
		},
		attributes: selectedFields,
	});

	if (!instance) {
		throw new AppError(404);
	}

	return instance;
};
