import express from 'express';
import config from './config';
import fs from 'fs';

var server = express();

server.listen(config.port, () => {
    console.log(`listening to http://localhost:${config.port}`);
});

server.get('/about', (req, res) => {
    fs.readFile('./about.html', (err, data) => {
        res.send(data.toString());
    })
});


server.get('/', (req, res) => {
    res.send("Hello from Express !!!");
});