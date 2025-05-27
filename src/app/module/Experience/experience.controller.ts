/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExperienceService } from './experience.service';

const createExperience = catchAsync(async (req, res, next) => {
  const result = await ExperienceService.createExperienceIntoDB(req.body);
  const message = 'Experience Added Successfully';

  sendResponse(res, StatusCodes.CREATED, true, message, result);
});

const getAllExperiences = catchAsync(async (req, res, next) => {
  const result = await ExperienceService.getAllExperiencesFromDB();
  const message = 'Experiences Retrieved Successfully';

  sendResponse(res, StatusCodes.OK, true, message, result);
});

export const ExperienceController = {
  createExperience,
  getAllExperiences,
};
