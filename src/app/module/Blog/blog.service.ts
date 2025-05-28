import { StatusCodes } from 'http-status-codes';
import throwAppError from '../../utils/throwAppError';
import { TBlog } from './blog.interface';
import { BlogModel } from './blog.model';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';

const createBlogIntoDB = async (file: Express.Multer.File, payload: TBlog) => {
  // allow case-insensitive matching (e.g., "React Basics" = "react basics"):
  const isBlogTitleMatched = await BlogModel.findOne({
    title: { $regex: new RegExp(`^${payload.title}$`, 'i') },
  });

  if (isBlogTitleMatched) {
    throwAppError(
      'title',
      'A blog with this title already exists.',
      StatusCodes.BAD_REQUEST,
    );
  }

  if (file) {
    const imgName = `${payload.title}-${Date.now()}`;
    // const imgPath = file.path;

    const uploadImgResult = await sendImageToCloudinary(file.buffer, imgName);
    if (uploadImgResult?.secure_url) {
      payload.thumbnail = uploadImgResult.secure_url;
    } else {
      payload.thumbnail = '';
      throwAppError(
        'cloudinary',
        'Cloudinary Upload failed and no image url returned',
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  } else {
    throwAppError(
      'file',
      'Blog Thumbnail not attached. You must select a thumbnail image',
      StatusCodes.BAD_REQUEST,
    );
  }

  const result = await BlogModel.create(payload);

  if (!result) {
    throwAppError(
      '',
      "Something Went Wrong. Couldn't post the blog. Try again.",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }

  return result;
};

const getAllBlogsFromDB = async () => {
  const result = await BlogModel.find();

  if (!result.length) {
    throwAppError('', 'No Blog Found At this moment', StatusCodes.NOT_FOUND);
  }

  return result;
};

export const BlogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
};
