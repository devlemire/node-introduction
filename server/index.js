const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use('/api/books', require('./routes/books_router'));

const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );