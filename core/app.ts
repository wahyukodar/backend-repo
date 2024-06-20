import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: 'ok' });
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

export default app;
