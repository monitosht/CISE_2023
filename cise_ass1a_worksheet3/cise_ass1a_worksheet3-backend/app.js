const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

const books = require('./routes/api/books');

connectDB();

app.use(cors({ 
    origin: true, 
    credentials: true,
    methods: ["POST", "GET", "PUT", "DELETE"]
}));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/books', books);

const port = process.env.PORT || 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;