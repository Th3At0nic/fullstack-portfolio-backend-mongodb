import { StatusCodes } from 'http-status-codes';
import throwAppError from '../../utils/throwAppError';
import { TCourse } from './course.interface';
import { CourseModel } from './course.model';

const addCertificateIntoDB = async (payload: TCourse) => {
  const result = await CourseModel.create(payload);

  if (!result) {
    throwAppError(
      '',
      "Something went wrong. Couldn't Add the Certificate.",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }

  return result;
};

const getAllCertificateFromDB = async () => {
  const result = await CourseModel.find();

  if (!result.length) {
    throwAppError(
      '',
      'No Course Certificate Found in the system at this moment',
      StatusCodes.NOT_FOUND,
    );
  }

  return result;
};

export const CourseAndCertificateService = {
  addCertificateIntoDB,
  getAllCertificateFromDB,
};
