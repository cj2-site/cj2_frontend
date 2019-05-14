import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header className="primary-nav">
        <nav>
          <h1><Link to="/">CJ2S URL SHORTENER</Link></h1>
          <ul>
            <li><Link to="/faq/">FAQ</Link></li>
            <li><Link to="/about/">ABOUT</Link></li>
            <li><Link to="/links/">LINKS</Link></li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
