import mongoose from 'mongoose';
import sequence from 'mongoose-sequence';
import { nameValidator } from './validators/text.validator';

const Schema = mongoose.Schema;
const AutoIncrement = sequence(mongoose);

const RoleSchema = new Schema(
	{
		name: { type: String, required: true, validate: nameValidator },
		permissions: [{ type: Schema.Types.ObjectId, red: 'Permission' }],
		disabled: { type: Boolean, default: false },
		deleted: { type: Boolean, default: false }
	},
	{
		collection: 'roles',
		timestamps: true
	}
);

RoleSchema.plugin(AutoIncrement, { inc_field: '__role' });

export default mongoose.model('Role', RoleSchema);
