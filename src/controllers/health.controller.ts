import { Request, Response } from 'express';
import { healthService } from '../services/health.service';

export class HealthController {
  async check(req: Request, res: Response) {
    const health = await healthService.getStatus();
    
    if (health.status === 'DOWN') {
      return res.status(503).json(health);
    }

    return res.json(health);
  }
} 