import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import DashboardCard from 'src/components/shared/DashboardCard';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <DashboardCard title="Description">
        <Typography>This is the website description</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default Dashboard;
