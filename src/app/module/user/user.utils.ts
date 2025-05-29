/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';
import { TUserAuthData } from './user.interface';

//create access token and send it to the client
export const generateToken = (
  jwtPayload: TUserAuthData,
  secret: string,
  expiresIn: string | any,
) => {
  return jwt.sign(jwtPayload, secret, { expiresIn });
};
