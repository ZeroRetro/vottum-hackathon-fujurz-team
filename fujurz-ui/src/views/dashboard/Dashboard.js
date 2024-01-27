import React from 'react';
import { Grid, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import Blog from './components/Blog';
import DashboardCard from 'src/components/shared/DashboardCard';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <DashboardCard title="Sample Page">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
      <Grid container spacing={3} style={{ marginTop: 'auto' }}>
        <Grid item xs={12}>
          <Blog />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Dashboard;
