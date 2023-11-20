import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const endpoint = 'https://fakestoreapi.com/products';
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await axios.get(endpoint);

        // faking load time to test loader
        setTimeout(() => {
            setProducts(response.data);
            setIsLoading(false);
        }, 3000);
    }

    const values = {
        isLoading,
        fetchProducts,
        products
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={ values }>
            { children }
        </ProductsContext.Provider>
    )
}

ProductsProvider.propTypes = {
    children: PropTypes.element
};

export { ProductsProvider };
export default ProductsContext;