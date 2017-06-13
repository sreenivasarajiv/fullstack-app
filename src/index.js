import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

var color = Math.random() > 0.5 ? color = 'green' : color = 'red';

const Header = ({ message, name }) => {
    return (
        <h2 className="text-center" style={{ color: color }} >
            {message} {name}
        </h2>
    );
}

Header.propTypes = {
    message: PropTypes.string,
    name : PropTypes.string
}

const App = () => {
    return (
        <div>
            <Header message="Naming Header" name="Sreenivasa Rajiv" />
            <div>
                ...
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)