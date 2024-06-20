import { Router } from 'express';
import { updateUserData, fetchUserData } from '../controller/api';

const router = Router();

router.put('/:id', updateUserData);
router.get('/:id', fetchUserData);

export default router;
