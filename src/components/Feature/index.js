import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import './feature.scss';

const Feature = ({ title, variation, image, cta, color }) => {
    return (
        <section className={`feature feature--${variation} ${color ? `feature--${color}` : null}`}>
            <div className="container">
                <div className="feature__content">
                    <h2>{title}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    {cta ?
                        <Link to={cta.link} className="button">
                            {cta.text}
                        </Link>
                        :
                        null
                    }
                </div>
                <div className="feature__image">
                    <img src={image} alt={title} />
                </div>
            </div>
        </section>
    )
}

Feature.propTypes = {
    title: PropTypes.string.isRequired,
    variation: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    cta: PropTypes.object,
    color: PropTypes.string
}

export default Feature;