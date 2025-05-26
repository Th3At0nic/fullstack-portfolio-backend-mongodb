import { Router } from 'express';
import { HomeRoutes } from '../module/Home/Home.route';

const router = Router();

const routeModules = [
  {
    path: '/auth',
    route: HomeRoutes,
  },
];

routeModules.forEach((route) => router.use(route.path, route.route));

export default router;
