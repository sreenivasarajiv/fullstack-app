import express from 'express';
import config from './config';

var server = express();

server.listen(config.port, () => {
    console.log(`listening to http://localhost:${config.port}`);
});

server.get('/about', (req, res) => {
    res.send("This is About Page");
});

server.get('/', (req, res) => {
    res.send("Hello from Express !!!");
});