import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__brand">
                    <h3 className="footer__brand-name">Products</h3>
                    <nav className="footer__brand-social">
                        <Link to="#">
                            <span className="sr-only">Link to Threads</span>
                            <FontAwesomeIcon icon="fa-brands fa-square-threads" />
                        </Link>
                        <Link to="#">
                            <span className="sr-only">Link to Instagram</span>
                            <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
                        </Link>
                        <Link to="#">
                            <span className="sr-only">Link to Facebook</span>
                            <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
                        </Link>
                        <Link to="#">
                            <span className="sr-only">Link to LinkedIn</span>
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                        </Link>
                    </nav>
                </div>
                <div className="footer__nav">
                    <nav className="footer__nav-main">
                        <span className="footer__nav-title">Company</span>
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/about">
                            About
                        </Link>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </nav>
                    <nav className="footer__nav-utility">
                        <span className="footer__nav-title">Collections</span>
                        <Link to="#">
                            Phasellus
                        </Link>
                        <Link to="#">
                            Condimentum
                        </Link>
                        <Link to="#">
                            Adipiscing
                        </Link>
                    </nav>
                </div>                   
            </div>
            <div className="footer__legal">
                <div className="container">
                    <span className="footer__legal-copy">
                        <FontAwesomeIcon icon="fa-solid fa-copyright" />
                        {new Date().getFullYear()}
                    </span>
                    <span>Products, Inc.</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;