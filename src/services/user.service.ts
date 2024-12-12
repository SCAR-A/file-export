import { prisma } from '../utils/prisma';
import { IUser, IUserCreate, IUserUpdate } from '../types/user';

export class UserService {
  async findById(id: string): Promise<IUser | null> {
    return prisma.user.findUnique({
      where: { id }
    });
  }

  async findByUsername(username: string): Promise<IUser | null> {
    return prisma.user.findUnique({
      where: { username }
    });
  }

  async create(data: IUserCreate): Promise<IUser> {
    return prisma.user.create({
      data
    });
  }

  async update(data: IUserUpdate): Promise<IUser> {
    const { id, ...updateData } = data;
    return prisma.user.update({
      where: { id },
      data: updateData
    });
  }

  async delete(id: string): Promise<IUser> {
    return prisma.user.delete({
      where: { id }
    });
  }

  async findAll(page = 1, pageSize = 10): Promise<{ users: IUser[]; total: number }> {
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
        orderBy: { createdAt: 'desc' }
      }),
      prisma.user.count()
    ]);

    return { users, total };
  }
}

export const userService = new UserService(); 