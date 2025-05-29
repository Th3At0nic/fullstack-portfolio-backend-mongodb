import { Router } from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { resumeValidationSchema } from './resume.validation';
import { ResumeController } from './resume.controller';

const router = Router();

router.post(
  '/add-resume',
  validateRequest(resumeValidationSchema),
  ResumeController.addOrUpdateResume,
);

router.get('/', ResumeController.getResumeUrl);

export const ResumeRoutes = router;
