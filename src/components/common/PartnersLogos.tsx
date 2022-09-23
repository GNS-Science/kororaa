import React from 'react';
import { styled } from '@mui/material/styles';

import { PartnersLogo } from '../../constants/partnersLogos';
import { Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

export interface LogoCardProps {
  title: string;
  text: string;
  logos: PartnersLogo[];
  url: string;
}

export const Logo = styled('img')(({ theme }) => ({
  width: 'auto',
  maxWidth: 80,
  height: 'auto',
  maxHeight: 50,
  // valign: 'center',
  objectFit: 'contain',
  margin: 5,
  [theme.breakpoints.down('md')]: {
    madWidth: 40,
    maxHeight: 20,
  },
}));

export const LogoCard: React.FC<LogoCardProps> = ({ title, text, logos, url }: LogoCardProps) => {
  return (
    <Card>
      <CardActionArea component={Link} to={url}>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          <Typography>{text}</Typography>
        </CardContent>
        <CardContent>
          {logos.map((logo) => (
            <Logo key={logo.name} src={`/images/partner_logos/${logo.path}`} />
            // <CardMedia key={logo.path} component="img" height="15px" image={`/partners/${logo.path}`} sx={{ objectFit: 'none' }} />
          ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

// const PartnersLogos: React.FC = () => {
//   return (
//     <PartnersLogosContainer>
//       <Typography sx={{ fontStyle: 'italic' }}>
//         E mahi ana me
//         <br />
//         <strong>In collaboration with</strong>
//       </Typography>
//       {partnersLogos.map((logo) => (
//         <Logo key={logo.name} src={`/partners/${logo.path}`} />
//       ))}
//     </PartnersLogosContainer>
//   );
// };

// export default PartnersLogos;
