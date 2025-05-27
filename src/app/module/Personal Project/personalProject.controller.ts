/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PersonalProjectService } from './personalProject.service';

const createPersonalProject = catchAsync(async (req, res, next) => {
  const file = req?.file as Express.Multer.File;

  const result = await PersonalProjectService.createPersonalProjectIntoDB(
    file,
    req.body,
  );

  const message = 'Project Added Successfully';

  sendResponse(res, StatusCodes.CREATED, true, message, result);
});

const getAllPersonalProjects = catchAsync(async (req, res, next) => {
  const result = await PersonalProjectService.getAllPersonalProjectsFromDB();
  const message = 'All Projects Retrieved Successfully';
  sendResponse(res, StatusCodes.OK, true, message, result);
});

export const PersonalProjectController = {
  createPersonalProject,
  getAllPersonalProjects,
};
