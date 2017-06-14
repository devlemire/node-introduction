const express = require('express');
const bodyParser = require('body-parser');

const App = express();

App.use('/api/books', require('./routes/books_router'));

const port = 3005;
App.listen( port, () => { console.log(`Server listening on port ${port}`); } );