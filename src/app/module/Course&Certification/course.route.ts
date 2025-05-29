import { Router } from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { courseValidationSchema } from './course.validation';
import { CourseAndCertificateController } from './course.controller';

const router = Router();

router.post(
  '/add-certificate',
  validateRequest(courseValidationSchema),
  CourseAndCertificateController.addCertificate,
);

router.get('/', CourseAndCertificateController.getAllCertificates);

export const CourseAndCertificateRoutes = router;
