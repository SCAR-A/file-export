import { prisma } from '../utils/prisma';
import { redis } from '../utils/redis';
import { logger } from '../utils/logger';

export interface HealthStatus {
  status: 'UP' | 'DOWN';
  timestamp: string;
  checks: {
    database: 'UP' | 'DOWN';
    redis: 'UP' | 'DOWN';
    [key: string]: 'UP' | 'DOWN';
  };
}

export class HealthService {
  async checkDatabase(): Promise<'UP' | 'DOWN'> {
    try {
      await prisma.$queryRaw`SELECT 1`;
      return 'UP';
    } catch (error) {
      logger.error('Database health check failed:', error);
      return 'DOWN';
    }
  }

  async checkRedis(): Promise<'UP' | 'DOWN'> {
    try {
      await redis.set('health-check', 'ok', 10);
      const result = await redis.get('health-check');
      return result === 'ok' ? 'UP' : 'DOWN';
    } catch (error) {
      logger.error('Redis health check failed:', error);
      return 'DOWN';
    }
  }

  async getStatus(): Promise<HealthStatus> {
    const [dbStatus, redisStatus] = await Promise.all([
      this.checkDatabase(),
      this.checkRedis()
    ]);

    const health: HealthStatus = {
      status: 'UP',
      timestamp: new Date().toISOString(),
      checks: {
        database: dbStatus,
        redis: redisStatus
      }
    };

    if (Object.values(health.checks).includes('DOWN')) {
      health.status = 'DOWN';
    }

    return health;
  }
}

export const healthService = new HealthService(); 