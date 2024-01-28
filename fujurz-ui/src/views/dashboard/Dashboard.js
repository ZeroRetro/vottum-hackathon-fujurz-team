import React from 'react';
import PageContainer from 'src/components/container/PageContainer';

import DashboardCard from 'src/components/shared/DashboardCard';

import imgDashboard from 'src/assets/images/dashboard.jpeg';
import './Dashboard.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <DashboardCard>
        <div className="container">
          <div className="title">Siente el Arte</div>
          <div className="content">
            <div className="text-container">
              <p>
                <b>BlindSee</b> es un espacio libre de condicionamiento social donde el arte, la diversidad y la pasión
                se den la mano. Un espacio donde se pueda libremente exponer las creaciones de artistas emergentes que
                utilizan una nueva tecnologia que transforma el moviento en Arte.
              </p>
              <p>
                En <b>BlindSee</b> se puede explorar el arte de una forma diferente, donde el movimiento se convierte en
                arte y el arte en movimiento. Un espacio donde se puede sentir el arte y la pasión de los artistas
                emergentes.
              </p>
              <p>
                Somos un lugar en el que las personas invidentes puedan compartir su manera de percibir el mundo a
                través de sus creaciones.
              </p>
              <Button
                color="primary"
                variant="contained"
                size="large"
                fullWidth
                component={Link}
                to="/auth/register"
                type="Register Now"
                style={{ marginTop: '40px' }}
              >
                Register Now
              </Button>
            </div>
            <div className="image-container">
              <img src={imgDashboard} alt="img" width="100%" />
            </div>
          </div>
        </div>
      </DashboardCard>
    </PageContainer>
  );
};

export default Dashboard;
