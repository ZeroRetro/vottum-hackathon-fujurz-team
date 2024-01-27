import React from 'react';
import { Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import Blog from './components/Blog';

const StoreView = () => {
  return (
    <PageContainer title="Store" description="Shop items">
      <Grid container spacing={3} style={{ marginTop: 'auto' }}>
        <Grid item xs={12}>
          <Blog />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default StoreView;
