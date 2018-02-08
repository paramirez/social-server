import { PermissionService } from '../../services/users/PermissionService';
import { ProcessResponse } from '../Controller';
import { permission } from '../../models/access';

const service = new PermissionService();

export function getAll(req, res, next) {
	const promise = service.find({
		args: { deleted: false, disabled: false },
		visible: permission.open(),
		result: true
	});
	ProcessResponse(promise, res, next);
}

export function getAllDisable(req, res, next) {
	const promise = service.find({
		args: { deleted: false, disabled: true },
		visible: permission.open(),
		result: true
	});
	ProcessResponse(promise, res, next);
}

export function getAllDelete(req, res, next) {
	const promise = service.find({
		args: { deleted: true },
		visible: permission.open(),
		result: true
	});
	ProcessResponse(promise, res, next);
}

export function postCreate(req, res, next) {
	const promise = service.create({ body: req.body });
	ProcessResponse(promise, res, next);
}

export function getPermission(req, res, next) {
	const promise = service.findOne({
		args: {
			__permission: req.params.__permission,
			deleted: false,
			disabled: false
		},
		visible: permission.open(),
		result: true
	});
	ProcessResponse(promise, res, next);
}

export function patchEnablePermission(req, res, next) {
	const promise = service.findOneAndUpdate({
		args: {
			__permission: req.params.__permission,
			disabled: true,
			deleted: false
		},
		body: {
			disabled: false
		}
	});
	ProcessResponse(promise, res, next);
}

export function patchDisablePermission(req, res, next) {
	const promise = service.findOneAndUpdate({
		args: {
			__permission: req.params.__permission,
			disabled: false,
			deleted: false
		},
		body: {
			disabled: true
		}
	});
	ProcessResponse(promise, res, next);
}

export function deletePermission(req, res, next) {
	const promise = service.findOneAndUpdate({
		args: {
			__permission: req.params.__permission,
			deleted: false
		},
		body: {
			deleted: true
		}
	});
	ProcessResponse(promise, res, next);
}

export default {
	getAll,
	getAllDisable,
	getAllDelete,
	postCreate,
	getPermission,
	patchEnablePermission,
	patchDisablePermission,
	deletePermission
};
