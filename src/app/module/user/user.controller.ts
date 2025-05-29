/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { userService } from './user.service';

//imported HOF(catchAsync()) to pass the async func there to handle the promise and error, reduced boilerplates

const registerUser = catchAsync(async (req, res, next) => {
  const file = req?.file as Express.Multer.File;

  const result = await userService.registerUserIntoDB(file, req.body);
  const message = 'User Registered Successfully';
  sendResponse(res, StatusCodes.OK, true, message, result);
});

const loginUser = catchAsync(async (req, res, next) => {
  const result = await userService.loginUserAuth(req.body);
  const { accessToken, refreshToken } = result;

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: process.env.NODE_ENV === 'production', // Ensures the cookie is sent only over HTTPS in production
    sameSite: 'lax', // Prevents CSRF attacks
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
  });

  const message = 'Login Successful';
  sendResponse(res, StatusCodes.OK, true, message, { accessToken });
});

export const userControllers = { registerUser, loginUser };
