import express, { NextFunction, Request, Response } from 'express';
import { userControllers } from './user.controller';
import { validateRequest } from '../../middlewares/validateRequest';
import {
  refreshTokenValidationSchema,
  userLoginValidationSchema,
  userValidationSchema,
  updateUserValidationSchema,
} from './user.validation';
import { upload } from '../../utils/sendImageToCloudinary';
import { auth } from '../../middlewares/authRequest';
import { USER_ROLE } from './user.constant';

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

router.patch(
  '/update-profile',
  auth(USER_ROLE.admin),
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(updateUserValidationSchema),
  userControllers.updateMyProfileData,
);

export const userRoute = router;
