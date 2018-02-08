import mongoose from 'mongoose';
import sequence from 'mongoose-sequence';
import validator from 'mongoose-validator';
import { nameValidator } from '../validators/text.validator';

const Schema = mongoose.Schema;
const AutoIncrement = sequence(mongoose);

const emailValidate = [
	validator({
		validator: 'isEmail',
		message: 'Invalid email'
	})
];

const UserSchema = new Schema(
	{
		userNew: { type: Boolean, default: true },
		userNewPin: { type: Number, default: null },
		email: { type: String, validate: emailValidate, required: true, unique: true },
		password: { type: String, required: true },
		name: { type: String, required: true, validate: nameValidator },
		lastName: { type: String, required: true, validate: nameValidator },
		phone: { type: Array, default: [] },
		token: { type: String, default: null },
		role: { type: Schema.Types.ObjectId, ref: 'Role' },
		disabled: { type: Boolean, default: false },
		deleted: { type: Boolean, default: false }
	},
	{
		collection: 'users',
		timestamps: true
	}
);

UserSchema.plugin(AutoIncrement, { inc_field: '__user' });

export default mongoose.model('User', UserSchema);
