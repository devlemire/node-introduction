const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const port = 3005;
App.listen( port, () => { console.log(`Server listening on port ${port}`); } );