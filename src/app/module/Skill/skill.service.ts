import { StatusCodes } from 'http-status-codes';
import throwAppError from '../../utils/throwAppError';
import { TSkill } from './skill.interface';
import { SkillModel } from './skill.model';
import { sendImageToCloudinary } from '../../utils/sendImageToCloudinary';

const addSkillIntoDB = async (file: Express.Multer.File, payload: TSkill) => {
  const isSKillAlreadyAdded = await SkillModel.findOne({
    title: { $regex: new RegExp(`^${payload.title}$`, 'i') },
  });

  if (isSKillAlreadyAdded) {
    throwAppError(
      'title',
      'A Skill with this title already exists.',
      StatusCodes.BAD_REQUEST,
    );
  }

  if (file) {
    const imgName = `${payload.title}-${Date.now()}`;
    // const imgPath = file.path;

    const uploadImgResult = await sendImageToCloudinary(file.buffer, imgName);
    if (uploadImgResult?.secure_url) {
      payload.iconUrl = uploadImgResult.secure_url;
    } else {
      payload.iconUrl = '';
      throwAppError(
        'cloudinary',
        'Cloudinary Upload failed and no icon url returned',
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  } else {
    throwAppError(
      'file',
      'Skill icon not attached. You must select an icon/image',
      StatusCodes.BAD_REQUEST,
    );
  }

  const result = await SkillModel.create(payload);

  if (!result) {
    throwAppError(
      '',
      "Something went wrong. Couldn't Add Skill. Try Again",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }

  return result;
};

const getAllSkillsFromDB = async () => {
  const result = await SkillModel.find();

  if (!result.length) {
    throwAppError('', 'No Skills Found at this moment.', StatusCodes.NOT_FOUND);
  }

  return result;
};

export const SkillService = { addSkillIntoDB, getAllSkillsFromDB };
