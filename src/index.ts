import { createApp } from './app';
import { config } from './config';
import { logger } from './utils/logger';

const app = createApp();

app.listen(config.port, () => {
  logger.info(`Server is running on port ${config.port}`);
}); 