import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { pinoHttp } from 'pino-http';
import { errorHandler } from './middleware/error-handler';
import { configureRoutes } from './routes';
import { logger } from './utils/logger';

export const createApp = () => {
  const app = express();

  // 基础中间件
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(pinoHttp({ logger }));

  // 配置路由
  configureRoutes(app);

  // 错误处理中间件
  app.use(errorHandler);

  return app;
}; 