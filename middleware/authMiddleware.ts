import { Request, Response, NextFunction } from 'express';
import { admin } from '../config/firebaseConfig';
import { ApiError } from '../entities/ApiError';

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split('Bearer ')[1];

    if (!token) {
        return next(new ApiError(401, 'Unauthorized'));
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        res.locals.uid = decodedToken.uid;
        next();
    } catch (error) {
        next(new ApiError(401, 'Unauthorized'));
    }
};