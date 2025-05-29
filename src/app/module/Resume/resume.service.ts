import { StatusCodes } from 'http-status-codes';
import throwAppError from '../../utils/throwAppError';
import { TResume } from './resume.interface';
import { ResumeModel } from './resume.model';

const addOrUpdateResumeIntoDB = async (payload: TResume) => {
  const result = await ResumeModel.findOneAndUpdate(
    {}, // You can use `{ _id: someId }` or keep it empty if you're storing only one resume globally
    { resumeUrl: payload.resumeUrl },
    {
      upsert: true, // ← This makes it create if not exists
      new: true, // ← Returns the updated document
    },
  );

  if (!result) {
    throwAppError(
      '',
      "Something went wrong. Couldn't Add/Update the Resume. Try again.",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }

  return result;
};

const getResumeUrlFromDB = async () => {
  const result = await ResumeModel.find();

  if (!result.length) {
    throwAppError(
      '',
      'No Resume URL Found in the Database',
      StatusCodes.NOT_FOUND,
    );
  }

  return result;
};

export const ResumeService = {
  addOrUpdateResumeIntoDB,
  getResumeUrlFromDB,
};
