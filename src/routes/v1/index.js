import { Router } from 'express';
import usersRouter from './users.router';

import {
	notFound,
	processError
} from '../../controllers/erros/ErrorController';

const router = Router();

router.use('/user', usersRouter);
router.all('*', notFound);
router.use(processError);

export default router;
