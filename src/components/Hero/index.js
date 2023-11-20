import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import './hero.scss';

const Hero = ({ type, variation, title }) => {
    return (
        <section className={`hero hero--${type} hero--${variation}`}>
            <div className="container">
                <h1 className="hero__title">{title}</h1>
                {type === 'home' ?
                    <Link to="#" className="button">
                        Action Button
                    </Link>
                    :
                    null
                }
            </div>
        </section>
    )
}

Hero.propTypes = {
    type: PropTypes.string.isRequired,
    variation: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default Hero;