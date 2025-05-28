import { Router } from 'express';
import { ExperienceRoutes } from '../module/Experience/experience.route';
import { PersonalProjectRoutes } from '../module/Personal Project/personalProject.route';
import { BlogRoutes } from '../module/Blog/blog.route';

const router = Router();

const routeModules = [
  {
    path: '/experiences',
    route: ExperienceRoutes,
  },
  {
    path: '/projects',
    route: PersonalProjectRoutes,
  },
  {
    path: '/blogs',
    route: BlogRoutes,
  },
];

routeModules.forEach((route) => router.use(route.path, route.route));

export default router;
