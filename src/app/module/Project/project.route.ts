import { NextFunction, Request, Response, Router } from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { projectValidationSchema } from './project.validation';
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
  validateRequest(projectValidationSchema),
  ProjectController.createProject,
);

router.get('/', ProjectController.getAllProjects);

export const ProjectRoutes = router;
