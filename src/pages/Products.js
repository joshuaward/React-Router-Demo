import React, { useContext } from 'react';
import ProductsContext from '../context/products.context';

// components
import Hero from '../components/Hero';
import ProductsList from '../components/ProductsList';
import TextBlock from '../components/TextBlock';

const Products = () => {
    const { products } = useContext(ProductsContext);

    return (
        <>
            <Hero
                type="interior"
                variation="secondary"
                title="Products"
            />
            <ProductsList products={ products } />
            <TextBlock />
        </>
    )
}

export default Products;