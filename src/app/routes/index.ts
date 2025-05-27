import { Router } from 'express';
import { ExperienceRoute } from '../module/Experience/experience.route';
import { PersonalProjectRoute } from '../module/Personal Project/personalProject.route';

const router = Router();

const routeModules = [
  {
    path: '/experiences',
    route: ExperienceRoute,
  },
  {
    path: '/projects',
    route: PersonalProjectRoute,
  },
];

routeModules.forEach((route) => router.use(route.path, route.route));

export default router;
