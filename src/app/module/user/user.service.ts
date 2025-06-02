import jwt, { JwtPayload } from 'jsonwebtoken';
import { UserModel } from './user.model';
import { TLoginUser, TUser } from './user.interface';
import throwAppError from '../../utils/throwAppError';
import { StatusCodes } from 'http-status-codes';
import config from '../../config';
import { generateToken } from './user.utils';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';

const registerUserIntoDB = async (
  file: Express.Multer.File,
  payload: TUser,
) => {
  //preventing duplicate creation of student
  const userExisted = await UserModel.isUserExists(payload.email as string);

  if (userExisted) {
    throwAppError(
      'email',
      `The user id: ${payload.email} is already registered.`,
      StatusCodes.CONFLICT,
    );
  }

  if (file) {
    const imgName = `portfolioDP-${Date.now()}`;
    // const imgPath = file.path;

    const uploadImgResult = await sendImageToCloudinary(file.buffer, imgName);
    if (uploadImgResult?.secure_url) {
      payload.avatarUrl = uploadImgResult.secure_url;
    } else {
      payload.avatarUrl = '';
      throwAppError(
        'cloudinary',
        'Cloudinary Upload failed and no image url returned',
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  } else {
    throwAppError(
      'file',
      'Profile Picture not attached. You must select an image',
      StatusCodes.BAD_REQUEST,
    );
  }

  //creating a new user
  const newUser = await UserModel.create(payload);

  if (!newUser) {
    throwAppError(
      'user',
      'Failed to create user. Please try again later.',
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }

  return newUser;
};

const loginUserAuth = async (payload: TLoginUser) => {
  const { email, password: userGivenPassword } = payload;

  const user = await UserModel.isUserExists(email);

  if (!user) {
    throwAppError(
      'email',
      `This Email is not Registered.`,
      StatusCodes.UNAUTHORIZED,
    );
  }

  // if (user?.deactivated) {
  //   throwAppError(
  //     'deactivated',
  //     'Your account is deactivated by admin. To login your account, contact admin to activate your account first',
  //     StatusCodes.FORBIDDEN,
  //   );
  // }

  const isPasswordValid = await UserModel.isPasswordCorrect(
    userGivenPassword,
    user?.password as string,
  );

  if (!isPasswordValid) {
    throwAppError(
      'password',
      'The provided password is incorrect. Please try again.',
      StatusCodes.UNAUTHORIZED,
    );
  }

  const jwtPayload = {
    userEmail: user?.email as string,
    role: user?.role as string,
  };

  // create access token and send it to the client
  const accessToken = generateToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = generateToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const createNewAccessTokenByRefreshToken = async (token: string) => {
  if (!token) {
    throwAppError(
      'authorization',
      'Authorization is required to access this resource.',
      StatusCodes.UNAUTHORIZED,
    );
  }

  // check if the token is valid
  // invalid token
  const decoded = jwt.verify(token, config.jwt_refresh_secret as string);

  // decoded undefined
  const { userEmail, role } = decoded as JwtPayload;

  // req.user = decoded as JwtPayload;

  const user = await UserModel.isUserExists(userEmail);

  if (!user) {
    throwAppError(
      'email',
      `The ${role} with the provided email: ${userEmail} not found in the system. Please recheck the Email and try again`,
      StatusCodes.NOT_FOUND,
    );
  }

  // const isUserDeactivated = user?.deactivated;
  // if (isUserDeactivated) {
  //   throwAppError(
  //     'email',
  //     `The account of ${role} with the provided email: ${userEmail} id deactivated. Please contact with admin to activate first`,
  //     StatusCodes.NOT_FOUND,
  //   );
  // }

  if (user) {
    const jwtPayload = {
      userEmail: user.email,
      role: user.role,
    };

    //create access token and send it to the client
    const accessToken = generateToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expires_in as string,
    );
    return { accessToken };
  } else return null;
};

const getMyDataFromDB = async () => {
  const result = await UserModel.find();
  if (!result.length) {
    throwAppError(
      'user',
      'No User Data Found at this moment',
      StatusCodes.NOT_FOUND,
    );
  }

  return result;
};

export const userService = {
  registerUserIntoDB,
  loginUserAuth,
  createNewAccessTokenByRefreshToken,
  getMyDataFromDB,
};
