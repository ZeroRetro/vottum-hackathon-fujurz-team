import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

import logo from '../../../../assets/images/logos/blindsee.jpeg';

const LinkStyled = styled(Link)(() => ({
  height: '65px',
  overflow: 'hidden',
  display: 'block',
  textAlign: 'center'
}));

const Logo = () => {
  return (
    <LinkStyled to="/">
      <img alt="BlindSee" src={logo} style={{ height: '100%' }} />
    </LinkStyled>
  );
};

export default Logo;
