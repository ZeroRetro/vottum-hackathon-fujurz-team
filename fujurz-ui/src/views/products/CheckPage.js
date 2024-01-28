import React from 'react';
import { Box } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import { ecoCard } from '../dashboard/components/Blog';
import _ from 'lodash';
import DashboardCard from 'src/components/shared/DashboardCard';

const ProductPage = () => {
  const ecoCardDuplicated = _.clone(ecoCard);
  const product = ecoCardDuplicated[0];

  return (
    <PageContainer title={`${product.title}`} description="Buy buy buy">
      <Box>
        <DashboardCard>
          <div>
            <h1>Item added to your collection!</h1>
            <p>{product.title}</p>
            <img src={product.photo} alt={product.title} />
          </div>
        </DashboardCard>
      </Box>
    </PageContainer>
  );
};

export default ProductPage;
