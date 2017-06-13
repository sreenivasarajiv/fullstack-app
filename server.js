import express from 'express';
import config from './config';
import apiRouter from './api/server';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

server.set('view engine', 'ejs');

server.listen(config.port, () => {
    console.log(`listening to http://localhost:${config.port}`);
});

server.use(express.static('public'));

server.use('/api', apiRouter);

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.get('/', (req, res) => {
    // res.send("Hello from Express !!!");
    // ejs index page
    res.render('index', {
        content: 'Hello, EJS by <strong>Sreenivasa Rajiv</strong>'
    });
});