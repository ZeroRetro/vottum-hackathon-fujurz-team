import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';

const AuthRegister = ({ title, subtitle, subtext }) => {
  const [email, setEmail] = useState('');

  return (
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
          <CustomTextField
            id="email"
            variant="outlined"
            fullWidth
            onChange={event => {
              setEmail(event.target.value);
            }}
          />

          {/* <Typography variant="subtitle1" fontWeight={600} component="label" htmlFor="password" mb="5px" mt="25px">
            Password
          </Typography>
          <CustomTextField id="password" variant="outlined" fullWidth /> */}
        </Stack>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          onClick={() => {
            fetch('http://localhost:4000/api/wallet/new', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                username: `${email}`,
                strategies: [2, 3],
                callbackUrl: 'https://callback.vottun.tech/rest/v1/success/',
                fallbackUrl: 'https://fallback.vottun.tech/rest/v1/error/',
                cancelUrl: 'https://fallback.vottun.tech/rest/v1/cancel/'
              })
            })
              .then(response => {
                if (!response.ok) {
                  throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
              })
              .then(data => {
                console.log(data);
                window.location.href = `https://wallet.vottun.io/?hash=${data.hash}&username=${email}`;
              })
              .catch(error => {
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
};

export default AuthRegister;
