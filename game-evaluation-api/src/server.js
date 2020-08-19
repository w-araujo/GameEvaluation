import express from 'express';
import routes from './routes/index';
import 'dotenv/config';

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
