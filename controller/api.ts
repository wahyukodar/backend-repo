import { Request, Response, NextFunction } from 'express';

export const updateUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send('User data updated');
  } catch (error) {
  }
};

export const fetchUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json('Fetch data');
  } catch (error) {
    next(error);
  }
};
