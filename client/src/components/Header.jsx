import React from 'react';
import StickyNavbar from './Navbar';
import { useTheme } from '../context/ThemeContext';

const Header = () => {

  return (
    <div>
      <StickyNavbar />
    </div>
  );
};

export default Header;
