const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use( bodyParser.json() );

const router = require('./routes/books_router');

app.use('/api/books', router);

const port = 3005;
app.listen( port, () => { console.log(`Server listening on port ${port}`); } );