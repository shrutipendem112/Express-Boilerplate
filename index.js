import express from 'express'
import colors from 'colors'

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`.blue.underline)
})