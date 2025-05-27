import { Router } from 'express';
import { ExperienceRoute } from '../module/Experience/experience.route';

const router = Router();

const routeModules = [
  {
    path: '/experiences',
    route: ExperienceRoute,
  },
];

routeModules.forEach((route) => router.use(route.path, route.route));

export default router;
