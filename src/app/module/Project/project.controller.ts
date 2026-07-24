 
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
// import { ProjectService } from './project.service';

// const createProject = catchAsync(async (req, res, next) => {
  const file = req?.file as Express.Multer.File;

  // const result = await ProjectService.createProjectIntoDB(file, req.body);

  const message = 'Project Added Successfully';

  sendResponse(res, StatusCodes.CREATED, true, message, result);
});

// const getAllProjects = catchAsync(async (req, res, next) => {
//   const result = await ProjectService.getAllProjectsFromDB();
  const message = 'All Projects Retrieved Successfully';
  sendResponse(res, StatusCodes.OK, true, message, result);
});

// export const ProjectController = {
//   createProject,
//   getAllProjects,
};
