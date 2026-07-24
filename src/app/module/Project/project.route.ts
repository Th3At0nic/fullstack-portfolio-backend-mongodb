import { NextFunction, Request, Response, Router } from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { personalProjectValidationSchema } from './project.validation';
import { PersonalProjectController } from './project.controller';
import { upload } from '../../utils/sendImageToCloudinary';

const router = Router();

router.post(
  '/add-project',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(personalProjectValidationSchema),
  PersonalProjectController.createPersonalProject,
);

router.get('/', PersonalProjectController.getAllPersonalProjects);

export const PersonalProjectRoutes = router;
