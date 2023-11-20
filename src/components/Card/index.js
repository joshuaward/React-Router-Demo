import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './card.scss';

const Card = ({ item }) => {
    return (
        <article className="card">
            <div className="card__img">
                <span>{item.category}</span>
                <img src={item.image} alt={item.title} />
            </div>
            <div className="card__content">
                <h2 className="card__title">{item.title}</h2>
                <p className="card__description">
                    {item.description.substring(0, 100)}...
                </p>
                <div className="card__rating">
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <span>{item.rating.rate} / {item.rating.count}</span>
                </div>
            </div>
        </article>
    )
}

Card.propTypes = {
    item: PropTypes.array
}

export default Card;