import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { FormControlLabel, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

import { Card, CardContent, CardActions, Typography } from '@mui/material';

const StyledCard = styled(Card)(() => ({
  justifyContent: 'center',
  alignItems: 'center',
}));

const PageContainer = styled('div')({
  width: '100%',
  // display: 'flex',
  // flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4rem',
});

const ContactContainer = styled('div')({
  // display: 'flex',
  // flexDirection: 'column',
  justifyContent: 'left',
  textAlign: 'left',
  width: '100%',
  // padding: '4rem',
});

// interface ContactCardProps {
//   title: string;
//   text: string;
//   url: string;
// }

// const ContactCard: React.FC<ContactCardProps> = ({ title, text, url }: ContactCardProps) => {
//   return (
//     <Grid item xs={4}>
//       <StyledCard>
//         <CardContent>
//           <Typography variant="h4">{title}</Typography>
//           <Typography>{text}</Typography>
//         </CardContent>
//       </StyledCard>
//     </Grid>
//   );
// };

interface EmailCardProps {
  title: string;
  text: string;
  email: string;
}

const EmailCard: React.FC<EmailCardProps> = ({ title, text, email }: EmailCardProps) => {
  return (
    <Grid item xs={4}>
      <StyledCard>
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <Typography>{text}</Typography>
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
      <Grid item xs={12}>
        <ContactContainer>
          <Typography variant="h1">Contacts</Typography>
        </ContactContainer>
      </Grid>
      <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }}>
        <EmailCard title="Email " text="The Project team can be contacted here" email="nshm@gns.cri.nz" />
        {/*<ContactCard title="NZSHM Science Reports" text="Scientific publications for the NZSHM." url="/Resources/ScienceReports" />*/}
        {/*<ContactCard title="Technical resources" text="Contactrmation technology used and produced by the NZHSM project. APis, Code Repositories etc." url="." />*/}
      </Grid>
    </PageContainer>
  );
};

export default ContactPage;
