import { Router } from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { experienceValidationSchema } from './experience.validation';
import { ExperienceController } from './experience.controller';

const router = Router();

router.post(
  '/add-experience',
  validateRequest(experienceValidationSchema),
  ExperienceController.createExperience,
);

router.get('/', ExperienceController.getAllExperiences);



export const ExperienceRoutes = router;
