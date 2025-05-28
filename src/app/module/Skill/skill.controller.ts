/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SkillService } from './skill.service';

const addSkill = catchAsync(async (req, res, next) => {
  const file = req?.file as Express.Multer.File;

  const result = await SkillService.addSkillIntoDB(file, req.body);
  const message = 'Added the Skill Successfully';
  sendResponse(res, StatusCodes.CREATED, true, message, result);
});

const getAllSkills = catchAsync(async (req, res, next) => {
  const result = await SkillService.getAllSkillsFromDB();

  const message = 'All SKills Retrieved Successfully';
  sendResponse(res, StatusCodes.OK, true, message, result);
});

export const SkillController = {
  addSkill,
  getAllSkills,
};
