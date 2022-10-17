import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import CHANGELOG from '../../CHANGELOG.md';
import ReactMarkdown from 'react-markdown';

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
  paddingBottom: '1rem',
});

const ChangelogPage: React.FC = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(CHANGELOG)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container spacing={2} columns={{ sm: 6, md: 8, lg: 12 }}>
            <Grid item xs={12}>
              <TitleContainer>
                <Typography variant="h2">Releases</Typography>
              </TitleContainer>
            </Grid>
            <Grid item>
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </PageContainer>
  );
};

export default ChangelogPage;
