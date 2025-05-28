import { NextFunction, Request, Response, Router } from 'express';
import { upload } from '../../utils/sendImageToCloudinary';
import { validateRequest } from '../../middlewares/validateRequest';
import { blogValidationSchema } from './blog.validation';
import { BlogController } from './blog.controller';

const router = Router();

router.post(
  '/create-blog',
  upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(blogValidationSchema),
  BlogController.createBlog,
);

router.get('/', BlogController.getAllBlogs);

export const BlogRoutes = router;
