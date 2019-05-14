import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Faq from './faq.jsx';
import About from './about.jsx';

const Header = () => {
  return (
      <header className="primary-nav">
        <nav>
          <h1><Link to="/">CJ<sup>2</sup> URL SHORTENER</Link></h1>
          <ul>
            <li><Link to="/faq/">FAQ</Link></li>
            <li><Link to="/about/">ABOUT</Link></li>
            <li>LINKS</li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
