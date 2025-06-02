import express, { NextFunction, Request, Response } from 'express';
import { userControllers } from './user.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import {
  refreshTokenValidationSchema,
  userLoginValidationSchema,
  userValidationSchema,
} from './user.validation';
import { upload } from '../../utils/sendImageToCloudinary';

const router = express.Router();

router.get('/profile-data', userControllers.getMyData);

router.post(
  '/register',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(userValidationSchema),
  userControllers.registerUser,
);

router.post(
  '/login',
  validateRequest(userLoginValidationSchema),
  userControllers.loginUser,
);

router.post(
  '/refresh-token',
  validateRequest(refreshTokenValidationSchema),
  userControllers.createNewAccessTokenByRefreshToken,
);

export const userRoute = router;
