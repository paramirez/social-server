import { Service } from '../Service';
import Role from '../../models/users/Role';

export class RolService extends Service {
	constructor() {
		super(Role);
	}
}
