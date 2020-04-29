// https://github.com/maximakymenko/react-burger-menu-article-app/blob/master/src/components/Menu/Menu.js

import React from 'react';
import { StyledMenu } from './Menu.styled';

const MobileMenu = ({ open, children, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      {children}
    </StyledMenu>
  )
}

export default MobileMenu;