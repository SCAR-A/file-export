export interface IUser {
  id: string;
  username: string;
  password: string | null;
  salt: string | null;
  nickname: string | null;
  avatarUrl: string | null;
  bio: string | null;
  status: number | null;
  registerSource: number | null;
  registerIp: string | null;
  registerDevice: string | null;
  lastLoginAt: Date | null;
  lastLoginIp: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface IUserCreate extends Omit<IUser, 'id' | 'createdAt' | 'updatedAt'> {
  password: string;
}

export interface IUserUpdate extends Partial<Omit<IUser, 'id'>> {
  id: string;
}

export enum UserStatus {
  NORMAL = 1,
  DISABLED = 2,
}

export enum RegisterSource {
  PHONE = 1,
  WECHAT = 2,
  EMAIL = 3,
  GOOGLE = 4,
} 