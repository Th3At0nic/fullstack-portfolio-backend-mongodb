import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import { notFound } from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();
import cookieParser from 'cookie-parser';

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      'http://localhost:5173',
      'https://my-fullstack-portfolio-dashboard.vercel.app',
    ],
    credentials: true,
  }),
);

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

//this is the global error handler
app.use(globalErrorHandler);

// not found handler
app.use(notFound);

export default app;
