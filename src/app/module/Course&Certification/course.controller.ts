/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CourseAndCertificateService } from './course.service';

const addCertificate = catchAsync(async (req, res, next) => {
  const result = await CourseAndCertificateService.addCertificateIntoDB(
    req.body,
  );

  const message = 'Certificate Added Successfully';
  sendResponse(res, StatusCodes.CREATED, true, message, result);
});

const getAllCertificates = catchAsync(async (req, res, next) => {
  const result = await CourseAndCertificateService.getAllCertificateFromDB();

  const message = 'All Course Certificates Retrieved Successfully';
  sendResponse(res, StatusCodes.OK, true, message, result);
});

export const CourseAndCertificateController = {
  addCertificate,
  getAllCertificates,
};
