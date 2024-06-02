import express from 'express'
import colors from 'colors'
import { errorHandler, notFound } from './middlewares/error.middleware';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`.blue.underline)
})