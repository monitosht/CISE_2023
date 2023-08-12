const express = require('express');
const app = express();

// Connect to database

const connectDB = require('./config/db');
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server is running on port ${port}`));