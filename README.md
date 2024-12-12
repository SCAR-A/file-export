# Express TypeScript 后端服务脚手架

一个基于 Express.js + TypeScript 的后端服务脚手架，集成了常用的开发工具和最佳实践。

## 技术栈

- **运行时**: Node.js 18 LTS+
- **开发语言**: TypeScript 5.0+
- **Web 框架**: Express.js
- **数据库**: MySQL + Prisma ORM
- **缓存**: Redis
- **日志**: Pino
- **API 文档**: Swagger/OpenAPI 3.0
- **测试**: Jest
- **代码规范**: ESLint + TypeScript ESLint

## 项目结构

```
service-name/
├── src/
│   ├── config/           # 配置文件
│   │   ├── index.ts     # 主配置文件
│   │   └── swagger.ts   # Swagger配置
│   ├── controllers/      # 控制器层
│   ├── services/        # 业务逻辑层
│   ├── middleware/      # 中间件
│   ├── utils/           # 工具函数
│   ├── types/           # TypeScript 类型定义
│   └── routes/          # 路由定义
├── prisma/              # Prisma配置和迁移
├── tests/               # 测试文件
├── docs/               # 项目文档
└── scripts/            # 构建和部署脚本
```README.md

## 特性

- 🚀 基于 TypeScript 的强类型支持
- 📦 Prisma ORM 的数据库操作
- 🔄 Redis 缓存支持
- 📝 Swagger/OpenAPI 自动生成 API 文档
- 🔍 ESLint + TypeScript ESLint 代码规范
- 🧪 Jest 测试框架集成
- 📊 Pino 日志系统
- 🔒 内置错误处理中间件
- 🎯 RESTful API 最佳实践
- 🛠 开发环境热重载

## 快速开始

### 环境要求

- Node.js 18+
- MySQL 8.0+
- Redis 6.0+

### 安装

```bash
# 克隆项目
git clone [repository-url]

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件，配置数据库等信息

# 生成 Prisma 客户端
npm run prisma:generate

# 运行数据库迁移
npm run prisma:migrate
```

### 开发

```bash
# 启动开发服务器
npm run dev

# 类型检查
npm run type-check

# 代码规范检查
npm run lint
```

### 构建和部署

```bash
# 构建项目
npm run build

# 启动生产服务
npm start

# 构建 Docker 镜像
npm run docker:build
```

## 项目配置

### 环境变量

项目使用 `.env` 文件管理环境变量，主要配置项包括：

```env
# 环境变量
NODE_ENV=development
PORT=3000
LOG_LEVEL=debug

# 数据库配置
DATABASE_URL="mysql://username:password@localhost:3306/dbname"

# Redis配置
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0
```

### 数据库

使用 Prisma 进行数据库操作，主要命令：

```bash
# 生成 Prisma 客户端
npm run prisma:generate

# 创建迁移
npm run prisma:migrate

# 部署迁移
npm run prisma:deploy

# 查看数据库
npm run prisma:studio
```

## API 文档

启动服务后，可以通过以下地址访问 API 文档：

- Swagger UI: `http://localhost:3000/api-docs`
- OpenAPI JSON: `http://localhost:3000/api-docs/json`

## 测试

```bash
# 运行测试
npm test

# 查看测试覆盖率
npm run test:coverage
```

## 代码规范

项目使用 ESLint 和 TypeScript ESLint 进行代码规范检查：

```bash
# 运行代码规范检查
npm run lint

# 类型检查
npm run type-check
```

## 错误处理

项目统一的错误响应格式：

```typescript
interface ErrorResponse {
  code: string;        // 错误代码
  message: string;     // 错误信息
  details?: unknown;   // 详细信息（可选）
  timestamp: string;   // 时间戳
}
```

## 日志

使用 Pino 进行日志记录，支持不同级别的日志：

- ERROR: 错误日志
- WARN: 警告日志
- INFO: 信息日志
- DEBUG: 调试日志

## 贡献

欢迎提交 Issue 和 Pull Request。

## 许可证

[MIT License](LICENSE)