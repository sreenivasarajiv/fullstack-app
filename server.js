import express from 'express';
import config from './config';
import apiRouter from './api/server';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import serverRender from './serverRender';

const server = express();

server.set('view engine', 'ejs');

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.listen(config.port, config.host, () => {
    console.log(`listening to http://${config.host}:${config.port}`);
});

server.use(express.static('public'));

server.use('/api', apiRouter);

server.get('/', (req, res) => {
    serverRender()
        .then(({ initialMarkup, initialData }) => {
            res.render('index', {
                content: initialMarkup,
                initialData: initialData
            });
        })
        .catch(console.error);
});