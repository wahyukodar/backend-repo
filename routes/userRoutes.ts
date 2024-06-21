import { Router } from 'express';
import { createUserData, updateUserData, fetchUserData } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post('/create-user', authMiddleware, createUserData);
router.put('/update-user-data/:id', authMiddleware, updateUserData);
router.get('/fetch-user-data/:id', authMiddleware, fetchUserData);

export default router;
