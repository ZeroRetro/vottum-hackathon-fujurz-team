import React from 'react';
import { Box, CardContent, Grid, Rating, Stack, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import YearlyBreakup from '../dashboard/components/YearlyBreakup';
import RecentTransactions from '../dashboard/components/RecentTransactions';
import ProductPerformance from '../dashboard/components/ProductPerformance';
import Blog, { ecoCard } from '../dashboard/components/Blog';
import BlankCard from 'src/components/shared/BlankCard';
import _ from 'lodash';

const ProductPage = () => {
  const ecoCardDuplicated = _.clone(ecoCard);
  const product = ecoCardDuplicated[0];
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <Box>
        <Grid container spacing={3}>
          <Grid item sm={12} md={4} lg={3}>
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
          <Grid item sm={12} md={4} lg={3}>
            <DashboardCard title="Sample Page">
              <Typography>This is a sample page</Typography>
            </DashboardCard>
          </Grid>
          <Grid item xs={12} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <YearlyBreakup />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4}>
            <RecentTransactions />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerformance />
          </Grid>
          <Grid item xs={12}>
            <Blog />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default ProductPage;
