import { NextFunction, Request, Response, Router } from 'express';
import { upload } from '../../utils/sendImageToCloudinary';
import { validateRequest } from '../../middlewares/validateRequest';
import { skillValidationSchema } from './skill.validation';
import { SkillController } from './skill.controller';

const router = Router();

router.post(
  '/add-skill',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },

  validateRequest(skillValidationSchema),
  SkillController.addSkill,
);

router.get('/', SkillController.getAllSkills);

export const SkillRoutes = router;
