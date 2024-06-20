import express from 'express';
import userRoutes from '../routes/userRoutes';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

export default app;
