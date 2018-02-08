export function notFound(req, res) {
	return res.status(404).json({ status: 404, message: 'Not found' });
}

export function processError(err, req, res, next) {
	if (err) {
		const status = err.status || 500;
		return res.status(status).json({ status, message: err.message });
	} else next();
}

export default {
	notFound,
	processError
};
