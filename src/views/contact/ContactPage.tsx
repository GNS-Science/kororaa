import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { FormControlLabel, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

import { Card, CardContent, CardActions, Typography } from '@mui/material';
import { CardActionArea, CardMedia, Link } from '@mui/material';

const StyledCard = styled(Card)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
}));

const PageContainer = styled('div')({
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
  marginBottom: '2rem',
});

const TitleContainer = styled('div')({
  justifyContent: 'left',
  textAlign: 'left',
  width: '100%',
  paddingBottom: '2rem',
});

interface OffsiteLinkCardProps {
  title: string;
  text: string;
  url: string;
}

const OffsiteLinkCard: React.FC<OffsiteLinkCardProps> = ({ title, text, url }: OffsiteLinkCardProps) => {
  return (
    <Grid item xs={4}>
      <StyledCard>
        <CardActionArea component={Link} target="_blank" rel="noopener" href={url}>
          <CardContent>
            <Typography variant="h4">{title}</Typography>
            <Typography>{text}</Typography>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    </Grid>
  );
};

interface EmailCardProps {
  title: string;
  text: string;
  email: string;
}

export interface MenuCardProps {
  title: string;
  text: string;
  img: string;
  url: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, text, img, url }: MenuCardProps) => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardActionArea component={Link} target="_blank" rel="noopener" href={url}>
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography>{text}</Typography>
          </CardContent>
          <CardMedia component="img" image={img} height="225px" sx={{ objectFit: 'cover' }} />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const EmailCard: React.FC<EmailCardProps> = ({ title, text, email }: EmailCardProps) => {
  return (
    <Grid item xs={12}>
      <StyledCard>
        <CardContent>
          <Typography variant="h5">{title}</Typography>
        </CardContent>
        <CardActions>
          <FormControlLabel
            control={
              <a target="_top" rel="noopener noreferrer" href={'mailto:' + email}>
                <IconButton color="primary">
                  <EmailIcon fontSize={'large'} /> {/* icon */}
                </IconButton>
              </a>
            }
            label={email}
            labelPlacement="start"
          />
        </CardActions>
      </StyledCard>
    </Grid>
  );
};

const ContactPage: React.FC = () => {
  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }}>
            <Grid item xs={12}>
              <TitleContainer>
                <Typography variant="h2">Contacts</Typography>
                <Typography variant="body1">
                  <strong>A few ways to get in touch with the National Seismic Hazard Model.</strong>
                </Typography>
              </TitleContainer>
            </Grid>
            <MenuCard title="Contact NSHM" text="Web contact form for the NSHM project team at GNS Science." img="images/NSHM-feedback.png" url="https://www.gns.cri.nz/about-us/nshm-feedback/" />
            <MenuCard
              title="NSHM"
              text="Our main site provides an overview of the work surrounding this web site."
              img="images/NSHM-programme-header-2.png"
              url="https://www.gns.cri.nz/research-projects/national-seismic-hazard-model/"
            />
            <MenuCard title="GNS" text="NSHM is among the many research programmes of GNS Science." img="images/GNS-home.png" url="https://www.gns.cri.nz/" />
            <EmailCard title="Email Address" text="The Project team can be contacted here" email="nshm@gns.cri.nz" />
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </PageContainer>
  );
};

export default ContactPage;
