import { Request, Response } from 'express';
import { userService } from '../services/user.service';
import { logger } from '../utils/logger';
import { ServiceError } from '../utils/service-error';

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const user = await userService.create(req.body);
      res.status(201).json(user);
    } catch (error) {
      logger.error('Create user error:', error);
      throw new ServiceError('USER_CREATE_ERROR', 'Failed to create user');
    }
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const user = await userService.findById(id);
    if (!user) {
      throw new ServiceError('USER_NOT_FOUND', 'User not found');
    }
    res.json(user);
  }

  async findAll(req: Request, res: Response) {
    const page = parseInt(req.query.page as string || '1', 10);
    const pageSize = parseInt(req.query.pageSize as string || '10', 10);
    
    const result = await userService.findAll(page, pageSize);
    res.json({
      data: result.users,
      meta: {
        total: result.total,
        page,
        pageSize
      }
    });
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    const updateData = {
      id,
      ...req.body
    };

    try {
      const user = await userService.update(updateData);
      res.json(user);
    } catch (error) {
      logger.error('Update user error:', error);
      throw new ServiceError('USER_UPDATE_ERROR', 'Failed to update user');
    }
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    try {
      await userService.delete(id);
      res.status(204).send();
    } catch (error) {
      logger.error('Delete user error:', error);
      throw new ServiceError('USER_DELETE_ERROR', 'Failed to delete user');
    }
  }
}

export const userController = new UserController(); 