import React from 'react';
import { Box, Button, CardContent, Grid, Rating, Stack, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import YearlyBreakup from '../dashboard/components/YearlyBreakup';
import RecentTransactions from '../dashboard/components/RecentTransactions';
import ProductPerformance from '../dashboard/components/ProductPerformance';
import { ecoCard } from '../dashboard/components/Blog';
import BlankCard from 'src/components/shared/BlankCard';
import _ from 'lodash';

const ProductPage = () => {
  const ecoCardDuplicated = _.clone(ecoCard);
  const product = ecoCardDuplicated[0];
  return (
    <PageContainer title={`${product.title}`} description={`${product.description}`}>
      <Box>
        <Grid container spacing={3}>
          <Grid item sm={12} lg={3}>
            <BlankCard>
              <img src={product.photo} alt="img" width="100%" />
              <CardContent sx={{ p: 3, pt: 2 }}>
                <Typography variant="h6">{product.title}</Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
                  <Stack direction="row" alignItems="center">
                    <Typography variant="h6">${product.price}</Typography>
                    <Typography color="textSecondary" ml={1} sx={{ textDecoration: 'line-through' }}>
                      ${product.salesPrice}
                    </Typography>
                  </Stack>
                  <Rating name="read-only" size="small" value={product.rating} readOnly />
                </Stack>
              </CardContent>
            </BlankCard>
          </Grid>
          <Grid item xs={12} lg={5}>
            <DashboardCard title="By Andrew McDownland">
              <Typography>
                This is a mesmerizing abstract painting that will add a burst of color and energy to any space. The
                painting features a vibrant and diverse color palette, with shades of blue, green, yellow, red, purple,
                and more blending into each other to create complex shapes and patterns.
              </Typography>
              <Button
                color="primary"
                variant="contained"
                size="large"
                style={{ marginTop: '110px' }}
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
                      window.location.href = '/check';
                    })
                    .catch(error => {
                      // window.location.href = '/check';
                      console.error('Error:', error);
                    });
                }}
              >
                Buy
              </Button>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} lg={4}>
            <YearlyBreakup />
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default ProductPage;
