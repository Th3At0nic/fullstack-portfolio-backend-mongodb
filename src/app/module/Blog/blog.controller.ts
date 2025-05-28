/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogService } from './blog.service';

const createBlog = catchAsync(async (req, res, next) => {
  const file = req?.file as Express.Multer.File;

  const result = await BlogService.createBlogIntoDB(file, req.body);

  const message = 'Blog Posted Successfully';
  sendResponse(res, StatusCodes.CREATED, true, message, result);
});

const getAllBlogs = catchAsync(async (req, res, next) => {
  const result = await BlogService.getAllBlogsFromDB();

  const message = 'All Blogs Retrieved Successfully';
  sendResponse(res, StatusCodes.OK, true, message, result);
});

export const BlogController = {
  createBlog,
  getAllBlogs,
};
