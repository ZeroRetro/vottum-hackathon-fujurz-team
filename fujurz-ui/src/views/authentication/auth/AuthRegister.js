import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';

const AuthRegister = ({ title, subtitle, subtext }) => (
  <>
    {title ? (
      <Typography fontWeight="700" variant="h2" mb={1}>
        {title}
      </Typography>
    ) : null}

    {subtext}

    <Box>
      <Stack mb={3}>
        <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="name" mb="5px">
          Name
        </Typography>
        <CustomTextField id="name" variant="outlined" fullWidth />

        <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="email" mb="5px" mt="25px">
          Email Address
        </Typography>
        <CustomTextField id="email" variant="outlined" fullWidth />

        <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="password" mb="5px" mt="25px">
          Password
        </Typography>
        <CustomTextField id="password" variant="outlined" fullWidth />
      </Stack>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        onClick={() => {
          fetch('http://localhost:4000/api/nft/transfer', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              contractAddress: '0x6412bdbDf..1Cf6805cb83613B2B1',
              network: 31,
              id: 1,
              from: '0xa47509768..59abd3ac1ab78873a0',
              to: '0x8C437496D4..6a34CD47863732165A3'
            })
          })
            .then(response => response.json())
            .then(data => {
              window.location.href = '/store';
            })
            .catch(error => {
              // window.location.href = '/store';
              console.error('Error:', error);
            });
        }}
      >
        Sign Up
      </Button>
    </Box>
    {subtitle}
  </>
);

export default AuthRegister;
