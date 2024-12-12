import { Router } from 'express';
import { HealthController } from '../controllers/health.controller';

export const healthRouter = Router();
const healthController = new HealthController();

/**
 * @swagger
 * /health:
 *   get:
 *     summary: 检查服务健康状态
 *     description: 返回服务、数据库和Redis的健康状态
 *     tags: [Health]
 *     responses:
 *       200:
 *         description: 服务正常运行
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   enum: [UP, DOWN]
 *                   example: UP
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 checks:
 *                   type: object
 *                   properties:
 *                     database:
 *                       type: string
 *                       enum: [UP, DOWN]
 *                       example: UP
 *                     redis:
 *                       type: string
 *                       enum: [UP, DOWN]
 *                       example: UP
 *       503:
 *         description: 服务不可用
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   enum: [UP, DOWN]
 *                   example: DOWN
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *                 checks:
 *                   type: object
 *                   properties:
 *                     database:
 *                       type: string
 *                       enum: [UP, DOWN]
 *                     redis:
 *                       type: string
 *                       enum: [UP, DOWN]
 */
healthRouter.get('/', healthController.check); 