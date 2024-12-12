/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         username:
 *           type: string
 *         nickname:
 *           type: string
 *         avatarUrl:
 *           type: string
 *         bio:
 *           type: string
 *         status:
 *           type: integer
 *           enum: [1, 2]
 *         registerSource:
 *           type: integer
 *           enum: [1, 2, 3, 4]
 *         lastLoginAt:
 *           type: string
 *           format: date-time
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     UserCreate:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *         password:
 *           type: string
 *           format: password
 *         nickname:
 *           type: string
 *         avatarUrl:
 *           type: string
 *         bio:
 *           type: string
 *     UserUpdate:
 *       type: object
 *       properties:
 *         nickname:
 *           type: string
 *         avatarUrl:
 *           type: string
 *         bio:
 *           type: string
 *         status:
 *           type: integer
 *           enum: [1, 2]
 */ 