import { Application } from 'express';
import { healthRouter } from './health.routes';
import { userRouter } from './user.routes';
import { swaggerRouter } from './swagger.routes';

export const configureRoutes = (app: Application) => {
  // 健康检查路由
  app.use('/health', healthRouter);
  
  // Swagger文档
  app.use('/api-docs', swaggerRouter);
  
  // API 版本前缀
  const apiPrefix = '/api/v1';
  
  // 用户相关路由
  app.use(`${apiPrefix}/users`, userRouter);
}; 