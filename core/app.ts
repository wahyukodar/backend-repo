import express from 'express';
import cors from 'cors';
import userRoutes from '../routes/userRoutes';
import { errorHandler } from '../middleware/errorHandler';

const app = express();
const port = process.env.PORT ?? 5000;

app.use(cors());
app.use(express.json());
app.use('/', userRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
