import React from 'react';
import PropTypes from 'prop-types';

import './blockquote.scss';

const Blockquote = ({ text, author, variation }) => {
    return (
        <blockquote className={`blockquote blockquote--${variation}`}>
            <div className="container container--small">
                <h2 className="blockquote__quote">
                    {text}
                </h2>
                <div className="blockquote__author">
                    {author}
                </div>
            </div>
        </blockquote>
    )
}

Blockquote.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string,
    variation: PropTypes.string
}

export default Blockquote;