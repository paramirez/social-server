import { Router } from 'express';
import PermissionController from '../../controllers/users/PermissionController';

const router = Router();

// CRUD Permisos

router
	.route('/permission')
	.get(PermissionController.getAll)
	.post(PermissionController.postCreate);

router.route('/permission/disable').get(PermissionController.getAllDisable);
router.route('/permission/delete').get(PermissionController.getAllDelete);

router
	.route('/permission/:__permission')
	.get(PermissionController.getPermission)
	.delete(PermissionController.deletePermission);

router.patch(
	'/permission/:__permission/enable',
	PermissionController.patchEnablePermission
);

router.patch(
	'/permission/:__permission/disable',
	PermissionController.patchDisablePermission
);

export default router;
