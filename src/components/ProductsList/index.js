import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './products.scss';

// components
import Card from '../Card';

const Products = ({ products }) => {
    useEffect(() => {
        console.log('products', products);
    }, []);

    return (
        <section className="products">
            <div className="container grid grid--gap-1 grid--cols-12">
                {products.map((item) => (
                    <div
                        key={ item.id }
                        className="grid__item grid__item--col-span-6 grid__item--col-span-md4 grid__item--col-span-lg3"
                    >
                        <Card item={ item } />
                    </div>
                ))}
            </div>
        </section>
    )
}

Products.propTypes = {
    products: PropTypes.array.isRequired
}

export default Products;