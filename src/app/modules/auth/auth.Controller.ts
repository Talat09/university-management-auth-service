import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';

const loginUser = catchAsync((req: Request, res: Response) => {
  console.log(req.body, res);
});
export const AuthController = {
  loginUser,
};
