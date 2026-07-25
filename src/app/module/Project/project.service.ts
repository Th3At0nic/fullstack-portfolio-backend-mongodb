import { StatusCodes } from 'http-status-codes';
import throwAppError from '../../utils/throwAppError';
import { TProject } from './project.interface';
import { ProjectModel } from './project.model';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';

const createProjectIntoDB = async (
  file: Express.Multer.File,
  payload: TProject,
) => {
  if (file) {
    const imgName = `projectImg-${Date.now()}`;
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
      'Thumbnail Image not attached. You must select a thumbnail image',
      StatusCodes.BAD_REQUEST,
    );
  }

  const result = await ProjectModel.create(payload);

  if (!result) {
    throwAppError(
      '',
      "Couldn't Add the Project. Try Again",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }

  return result;
};

const getAllProjectsFromDB = async () => {
  const result = await ProjectModel.find().sort({ createdAt: -1 });

  if (!result.length) {
    throwAppError(
      '',
      'No Project Found in the Database',
      StatusCodes.NOT_FOUND,
    );
  }

  return result;
};

export const ProjectService = {
  createProjectIntoDB,
  getAllProjectsFromDB,
};
