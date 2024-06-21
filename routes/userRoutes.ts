import { Router } from 'express';
import { createUserData, updateUserData, fetchUserData } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('', authMiddleware, createUserData);
router.put('/:id', authMiddleware, updateUserData);
router.get('/:id', authMiddleware, fetchUserData);

export default router;
