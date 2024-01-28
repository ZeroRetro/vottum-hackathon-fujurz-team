import React from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import DashboardCard from '../../../components/shared/DashboardCard';

const products = [
  {
    id: '1',
    name: 'Gustavo Santana',
    post: 'Designer',
    pname: 'Elite Admin',
    priority: 'Low',
    pbg: 'primary.main',
    budget: '3.9'
  },
  {
    id: '2',
    name: 'Andrew McDownland',
    post: 'Artist',
    pname: 'Elite Artist',
    priority: 'Medium',
    pbg: 'secondary.main',
    budget: '24.5'
  },
  {
    id: '3',
    name: 'Blind See',
    post: 'Siente el Arte',
    pname: 'Platform',
    priority: 'High',
    pbg: 'error.main',
    budget: '12.8'
  }
];

const ProductPerformance = () => {
  return (
    <DashboardCard title="Users Performance">
      <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: 'nowrap',
            mt: 2
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Id
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Assigned
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Name
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Budget
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map(product => (
              <TableRow key={product.name}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: '15px',
                      fontWeight: '500'
                    }}
                  >
                    {product.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {product.name}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: '13px'
                        }}
                      >
                        {product.post}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                    {product.pname}
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">${product.budget}k</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default ProductPerformance;
