import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    {
      id: 1,
      to: '/',
      text: 'Home'
    },
    {
      id: 2,
      to: '/products',
      text: 'Products'
    },
    {
      id: 3,
      to: '/about',
      text: 'About'
    },
    {
      id: 4,
      to: '/contact',
      text: 'Contact'
    },
  ];

  const handleHamburgerToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        return setIsScrolled(true);
      } else {
        return setIsScrolled(false);
      }
    });
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--is-scrolled' : ''}`}>
      <div className="container grid grid--gap-y-1 grid--cols-6">
        <div className="header__logo grid__item grid__item--col-span-3">
          <Link to="/">
            <span className="sr-only">Logo Link</span>
            <svg height="40" width="40">
              <circle
                cx="20"
                cy="20"
                r="20"
                stroke="none"
                strokeWidth="0"
                fill="DimGray"
              />
            </svg>
            <span className="header__logo-text">
              Products
            </span>
          </Link>
        </div>
        <button
            className={`header__hamburger grid__item grid__item--col-span-1 grid__item--col-start-6 ${isMenuOpen ? 'header__hamburger--is-open' : ''}`}
            onClick={ () => handleHamburgerToggle() }
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`header__nav grid__item--col-span-3 grid__item--col-start-7 grid__item--col-end-12  ${isMenuOpen ? 'header__nav--is-open' : ''}`}>
          {links.map((link) => (
            <Link
              key={ link.id }
              onClick={() => {setIsMenuOpen(false)}}
              to={ link.to }
            >
              { link.text }
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
