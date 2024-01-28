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
    <PageContainer title="Sample Page" description="this is Sample page">
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
              <Button color="primary" variant="contained" size="large" style={{ marginTop: '110px' }}>
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
