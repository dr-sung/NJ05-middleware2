// express-logger middleware

const express = require('express');
const logger = require('express-logger');
const app = express();

app.use('/', logger({path: './log/serverlog.txt'}));
app.get('/', (req, res) => {
    res.send('Hello');
});
app.get('/user', (req, res) => {
    res.send({name: 'John', age: 25});
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log('Server is running at port', port);