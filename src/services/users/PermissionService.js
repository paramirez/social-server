import { Service } from '../Service';
import Permission from '../../models/users/Permission';

export class PermissionService extends Service {
	constructor() {
		super(Permission);
	}
}
