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

// this cleanUpdatePayload is used to remove undefined and empty string values from the update payload before updating the user profile data in the database. This ensures that only valid and non-empty fields are updated, preventing accidental overwriting of existing data with undefined or empty values.
export function cleanUpdatePayload(payload: any) {
  const cleaned: any = {};

  for (const key in payload) {
    const value = payload[key];

    if (value !== undefined && value !== '') {
      cleaned[key] = value;
    }
  }

  return cleaned;
}
