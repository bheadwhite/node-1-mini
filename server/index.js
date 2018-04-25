const express = require('express');
const bodyParser = require('body-parser');
const bc = require('./controllers/books_controller')


const app = express();

app.use(bodyParser.json());

app.get('/api/books', bc.read)

app.post('/api/books', )

const port = 3000;
app.listen(port, () => {console.log(`Server is listening on port ${port}`);
});