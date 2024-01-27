import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import Profile from './Profile';
import Logo from '../shared/logo/Logo';
import { IconAperture, IconUserPlus } from '@tabler/icons';
import NavItem from '../sidebar/NavItem';

const headerButtons = [
  {
    id: uniqueId(),
    title: 'Create',
    icon: IconAperture,
    href: '/icons'
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/auth/register'
  }
];

const Header = props => {
  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: '70px'
    },
    borderBottomStyle: 'inset'
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    color: theme.palette.text.secondary
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <Logo />
        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          {headerButtons.map(button => (
            <NavItem item={button} key={button.id} pathDirect={button.href} />
          ))}
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object
};

export default Header;
