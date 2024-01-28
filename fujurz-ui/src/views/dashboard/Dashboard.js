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
      <DashboardCard title="Siente el Arte">
        <div class="container">
          <div class="text-container">
            ¡Descubre un mundo único de expresión artística en nuestra plataforma innovadora! Bienvenido a BlindSee,
            donde el arte gestual cobra vida a través de los sentidos. Imagina poder experimentar la creatividad de
            artistas excepcionales, cada uno de ellos con una perspectiva única y fascinante. En nuestra página web,
            ofrecemos un espacio especial para obras de arte gestual, tanto en música como en pintura, creadas por
            artistas ciegos. ¿Cómo es posible? Con la magia de la conexión entre sonido y arte. Nuestros talentosos
            artistas utilizan guantes equipados con sensores para pintar y crear música. Cada trazo y cada nota son
            manifestaciones de su mundo interior, guiados por la melodía que resuena en su mente. Lo más emocionante es
            que cada obra en nuestra plataforma está respaldada por la tecnología blockchain y contratos inteligentes
            con NFT (Tokens No Fungibles). Esto garantiza la autenticidad y trazabilidad de cada creación. Al adquirir
            una obra de arte en [Nombre de tu Plataforma], no solo obtienes una pieza única, sino que también apoyas
            directamente a artistas ciegos, brindándoles una plataforma para compartir su talento con el mundo. Tu
            compra no solo es un acto de adquirir arte, sino también un gesto de apoyo a comunidades vulnerables. En
            [Nombre de tu Plataforma], creemos en la inclusión y en la capacidad transformadora del arte. Únete a
            nosotros en esta emocionante travesía para hacer una diferencia a través del arte gestual. Explora, inspira
            y apoya. ¡Descubre el arte que va más allá de lo visible en BlindSee!
          </div>
          <div class="image-container">
            <img src={imgDashboard} alt="img" width="100%" />
          </div>
        </div>
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          component={Link}
          to="/auth/register"
          type="Register Now"
        >
          Register Now
        </Button>
      </DashboardCard>
    </PageContainer>
  );
};

export default Dashboard;
