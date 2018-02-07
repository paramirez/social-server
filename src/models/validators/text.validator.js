import validator from 'mongoose-validator';

export const nameValidator = [
	validator({
		validator: 'matches',
		arguments: ['^[a-z A-Z]+$', 'i'],
		message: 'Invalid text'
	})
];
