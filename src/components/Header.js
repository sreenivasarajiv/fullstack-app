import React from 'react';
import PropTypes from 'prop-types';

var color = Math.random() > 0.5 ? color = 'green' : color = 'red';

const Header = ({ message }) => {
    return (
        <h2 className="text-center" style={{ color: color }} >
            {message}
        </h2>
    );
}

Header.propTypes = {
    message: PropTypes.string,
    name : PropTypes.string
}

export default Header;