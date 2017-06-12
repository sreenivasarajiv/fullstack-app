import express from 'express';
import config from './config';
import apiRouter from './api/server'

var server = express();

server.listen(config.port, () => {
    console.log(`listening to http://localhost:${config.port}`);
});

server.use(express.static('public'));
server.use('/api', apiRouter);

server.get('/', (req, res) => {
    res.send("Hello from Express !!!");
});