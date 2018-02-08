export function ProcessResponse(
	promise = Promise,
	res,
	next,
	status = 200,
	message = false
) {
	promise
		.then(data => {
			if (data)
				return res.json({
					status,
					data,
					message: message ? message : 'OK'
				});
			next({ status: 404, message: 'Not found' });
		})
		.catch(err => next(err));
}
