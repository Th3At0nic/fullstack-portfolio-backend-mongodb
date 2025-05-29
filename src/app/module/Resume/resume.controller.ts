/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ResumeService } from './resume.service';

const addOrUpdateResume = catchAsync(async (req, res, next) => {
  const result = await ResumeService.addOrUpdateResumeIntoDB(req.body);

  const message = 'Resume URL Added Successfully';
  sendResponse(res, StatusCodes.CREATED, true, message, result);
});

const getResumeUrl = catchAsync(async (req, res, next) => {
  const result = await ResumeService.getResumeUrlFromDB();

  const message = 'Resume URL Retrieved Successfully';
  sendResponse(res, StatusCodes.OK, true, message, result);
});

export const ResumeController = {
  addOrUpdateResume,
  getResumeUrl,
};
