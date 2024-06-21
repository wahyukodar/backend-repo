import { Request, Response, NextFunction } from 'express';
import { createUser, updateUser, fetchUser } from '../repository/userCollection';
import { ApiError } from '../entities/ApiError';

export const createUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await createUser(req.body);
    res.status(201).send({ message: 'User created successfully' });
  } catch (error) {
    console.log(error);
    next(new ApiError(500, 'Failed to create user'));
  }
};

export const updateUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await updateUser(req.params.id, req.body);
    res.status(200).send('User data updated sucessfully');
  } catch (error) {
    next(new ApiError(500, 'Failed to update user data'));
  }
};

export const fetchUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await fetchUser(req.params.id);
    if (!user) {
      throw new ApiError(404, 'User not found');
    }
    res.status(200).json(user);
  } catch (error) {
    next(error);
    next(new ApiError(500, 'Failed fetch user data'));
  }
};
