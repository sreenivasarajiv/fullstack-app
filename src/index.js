import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
import config from '../config';


axios.get('/api/contests')
    .then(resp =>
        ReactDOM.render(
            <App initialContests={resp.data.contests} />,
            document.getElementById('root')
        )
    )
    .catch(console.error);