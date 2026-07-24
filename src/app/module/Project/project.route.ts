import { NextFunction, Request, Response, Router } from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { personalProjectValidationSchema } from './project.validation';
import { ProjectController } from './project.controller';
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
  ProjectController.createProject,
);

router.get('/', ProjectController.getAllProjects);

export const ProjectRoutes = router;
