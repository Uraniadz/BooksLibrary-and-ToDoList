const express = require('express');
const cors = require('cors');
const books = require('./data/books.json');

const app = express();

app.use(cors());

const port = process.env.PORT || 5000;
app.get('/books-api', (req, res) => {
  const indexBook = Math.floor(Math.random() * books.length);
  const bookApi = books[indexBook];
  res.json(bookApi);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
