import { Router } from 'express';
import { ExperienceRoutes } from '../module/Experience/experience.route';
import { PersonalProjectRoutes } from '../module/Personal Project/personalProject.route';
import { BlogRoutes } from '../module/Blog/blog.route';
import { SkillRoutes } from '../module/Skill/skill.route';
import { ResumeRoutes } from '../module/Resume/resume.route';
import { CourseAndCertificateRoutes } from '../module/Course&Certification/course.route';

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
  {
    path: '/skills',
    route: SkillRoutes,
  },
  {
    path: '/resume',
    route: ResumeRoutes,
  },
  {
    path: '/courses',
    route: CourseAndCertificateRoutes,
  },
];

routeModules.forEach((route) => router.use(route.path, route.route));

export default router;
