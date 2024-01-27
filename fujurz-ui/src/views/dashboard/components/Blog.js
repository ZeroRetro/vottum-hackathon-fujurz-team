import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent, Typography, Grid, Rating, Tooltip, Fab } from '@mui/material';
import img1 from 'src/assets/images/products/c1.jpeg';
import img2 from 'src/assets/images/products/c2.jpeg';
import img3 from 'src/assets/images/products/c3.jpeg';
import img4 from 'src/assets/images/products/c4.jpeg';
import img5 from 'src/assets/images/products/c5.png';
import img6 from 'src/assets/images/products/c6.jpeg';
import img7 from 'src/assets/images/products/c7.jpeg';
import img8 from 'src/assets/images/products/c8.jpeg';
import { Stack } from '@mui/system';
import { IconBasket } from '@tabler/icons';
import BlankCard from '../../../components/shared/BlankCard';

export const ecoCard = [
  {
    title: 'Dot Dot Dot',
    subheader: 'September 14, 2023',
    photo: img1,
    salesPrice: 375,
    price: 285,
    rating: 4
  },
  {
    title: 'Magic Mouse',
    subheader: 'September 20, 2023',
    photo: img2,
    salesPrice: 900,
    price: 650,
    rating: 5
  },
  {
    title: 'Crying Baby Doll',
    subheader: 'November 01, 2023',
    photo: img3,
    salesPrice: 200,
    price: 150,
    rating: 3
  },
  {
    title: 'Cute Soft Teddybear',
    subheader: 'November 14, 2023',
    photo: img4,
    salesPrice: 345,
    price: 285,
    rating: 2
  },
  {
    title: 'Boat Headphone',
    subheader: 'November 18, 2023',
    photo: img5,
    price: 23,
    rating: 2
  },
  {
    title: 'MacBook Air Pro',
    subheader: 'November 18, 2023',
    photo: img6,
    price: 408,
    rating: 4
  },
  {
    title: 'Red Valvet Dress',
    subheader: 'November 27, 2023',
    photo: img7,
    price: 200,
    rating: 1
  },
  {
    title: 'Cute Soft Teddybear',
    subheader: 'November 27, 2023',
    photo: img8,
    price: 307,
    rating: 5
  }
];

const Blog = () => {
  return (
    <Grid container spacing={3}>
      {ecoCard.map((product, index) => (
        <Grid item sm={12} md={4} lg={3} key={index}>
          <BlankCard>
            <Typography component={Link} to={'/product'}>
              <img src={product.photo} alt="img" width="100%" />
            </Typography>
            <Tooltip title="Add To Cart">
              <Fab size="small" color="primary" sx={{ bottom: '75px', right: '15px', position: 'absolute' }}>
                <IconBasket size="16" />
              </Fab>
            </Tooltip>
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
      ))}
    </Grid>
  );
};

export default Blog;
