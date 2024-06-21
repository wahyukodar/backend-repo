import express from 'express';
import userRoutes from '../routes/userRoutes';
import { errorHandler } from '../middleware/errorHandler';

const app = express();
const port = process.env.PORT ?? 5000;

app.use(express.json());
app.use('/users', userRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
