import mongoose from 'mongoose';
import sequence from 'mongoose-sequence';
import { nameValidator } from '../validators/text.validator';

const Schema = mongoose.Schema;
const AutoIncrement = sequence(mongoose);

const PermissionSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			validate: nameValidator
		},
		url: { type: String, required: true },
		method: {
			type: String,
			enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
			default: 'GET'
		},
		disabled: { type: Boolean, default: false },
		deleted: { type: Boolean, default: false }
	},
	{
		collection: 'permissions',
		timestamps: true
	}
);

PermissionSchema.plugin(AutoIncrement, { inc_field: '__permission' });

export default mongoose.model('Permission', PermissionSchema);
