import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import userRoutes from '../routes/userRoutes';
import { errorHandler } from '../middleware/errorHandler';
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

const app = express();
// const port = process.env.PORT ?? 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use('/', userRoutes);
app.use(errorHandler);

// app.listen(port, () => {
//   console.log(`App listening at http://localhost:${port}`);
// });

export const ebuddyAPI = onRequest((request, response) => {
  logger.info("Ebuddy API started running!", { structuredData: true });
  return app(request, response);
});
