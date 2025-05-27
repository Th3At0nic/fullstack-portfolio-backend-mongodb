import { StatusCodes } from 'http-status-codes';
import throwAppError from '../../utils/throwAppError';
import { TExperience } from './experience.interface';
import { ExperienceModel } from './experience.model';

const createExperienceIntoDB = async (payload: TExperience) => {
  const result = await ExperienceModel.create(payload);

  if (!result) {
    throwAppError(
      '',
      "Something went wrong. Couldn't Create add the experience.",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }

  return result;
};

const getAllExperiencesFromDB = async () => {
  const result = await ExperienceModel.find();

  if (!result.length) {
    throwAppError(
      '',
      'No Experiences Found in the system',
      StatusCodes.NOT_FOUND,
    );
  }

  return result;
};

export const ExperienceService = {
  createExperienceIntoDB,
  getAllExperiencesFromDB,
};
