import { Request, Response, NextFunction } from 'express';
import { ServiceError } from '../utils/service-error';
import { logger } from '../utils/logger';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  logger.error(error);

  if (error instanceof ServiceError) {
    return res.status(400).json({
      code: error.code,
      message: error.message,
      details: error.details,
      timestamp: new Date().toISOString()
    });
  }

  return res.status(500).json({
    code: 'INTERNAL_SERVER_ERROR',
    message: 'An unexpected error occurred',
    timestamp: new Date().toISOString()
  });
}; 