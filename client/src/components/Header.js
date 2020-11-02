import React from 'react';
import { Link } from 'react-router-dom';
import name from '../Studio_Ghibli_logo.svg';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to={'/'}>
          <img src={name} alt='Studio Ghibli' />
        </Link>
      </h1>
    </header>
  );
};

export default Header;
