import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const StyledBox = styled(Box)(() => ({
  padding: '1rem',
  'padding-top': '2rem',
}));

const PageContainer = styled('div')({
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
});

const PreviewTitleContainer = styled('div')({
  justifyContent: 'left',
  textAlign: 'left',
  width: '100%',
  'padding-bottom': '2rem',
});

interface PreviewCardProps {
  title: string;
  text: string;
  img?: string;
}

const PreviewCard: React.FC<PreviewCardProps> = ({ title, text, img }: PreviewCardProps) => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <Typography>{text}</Typography>
          <StyledBox>
            <CardMedia component="img" image={img} sx={{ objectFit: 'contain' }} />
          </StyledBox>
        </CardContent>
      </Card>
    </Grid>
  );
};

const PreviewsPage: React.FC = () => {
  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={2} />
        <Grid spacing={3} item xs={8}>
          <PreviewTitleContainer>
            <Typography variant="h2">Coming features</Typography>
            <Typography variant="body1">New features that we expect to include over the coming months.</Typography>
          </PreviewTitleContainer>
          <Grid container spacing={3} columns={{ sm: 6, md: 8, lg: 12 }}>
            <PreviewCard title="Ruptures and Rates view" text="Users can explore the Rupture sets and seismic rate models that produced the NSHM." img="/images/TUI-ruptures-0.png" />
            <PreviewCard title="NSHM Public API" text="A web API providing access to the datasets and internal components of the NSHM." img="/images/K-API-igraphql-0.png" />
            <PreviewCard
              title="Technical resources"
              text="A directory of all the Information Technology used and produced by the NZ NHSM project. API's, Code Repositories etc."
              img="/images/THS-documentation-home.png"
            />
            <PreviewCard title="Model versions" text="Compare the 2022 NSHM with the previous release (2010)." img="/images/PGA_haz_curves_comparison_vs_250_cropped.png" />
            <PreviewCard
              title="Logic Tree view"
              text="An interactive graphical view of the NSHM Logic tree structure with branches, weights and links to the internal model components."
              img="/images/sample_hik_logictree_reduced.png"
            />
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </PageContainer>
  );
};

export default PreviewsPage;
