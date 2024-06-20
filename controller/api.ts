import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../entities/ApiError';

export const updateUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send('User data updated');
  } catch (error) {
  }
};

export const fetchUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new ApiError(404, 'User not found');
  } catch (error) {
    next(error);
  }
};
