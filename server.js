// import config, { nodeEnv, logStars } from './config';
// console.log(logStars('hello, rajiv'));

// import https from 'https';

// https.get('https://www.lynda.com', res => {

//     console.log(`Response Status code : ${res.statusCode}`);

//     res.on('data', chunk => {
//         console.log(chunk.toString());
//     })
// });

import http from 'http';

var server = http.createServer();

server.listen(8080);

server.on('request', (req, res) => {
    res.write('Hello, HTTP \n');
    setTimeout(() => {
        res.write('I can stream');
        res.end();
    }, 3000);
});