import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ReactMarkdown from 'react-markdown';
// import { graphql } from 'babel-plugin-relay/macro';
// import { useLazyLoadQuery } from 'react-relay';
// import { ModelVersionsPageQuery } from './__generated__/ModelVersionsPageQuery.graphql';
import SimpleBackdrop from '../../components/common/SimpleBackdrop';

import { Typography } from '@mui/material';

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

const markdown = `
## NSHM_v1.0.0 - 2022-10-04

Initial release of the NZ NSHM 2022 revision

### Bug Advisory: April 2023
We have identified some errors in **NSHM_v1.0.0** that will impact hazard levels in some locations, mainly around the Fiordland region of the South Island, Aotearoa.
These errors are unlikely to affect any NSHM results-based decision making.

The issue was an incorrect dip direction (slope) on the Puysegur subduction fault system and on some specific faults in the Crustal system. Our tests have shown that
corrections will introduce neglibible hazard changes for most of the country. The Franz Joseph area will see some decrease in known hazard and Mt Cook, some increase.
`;

const ModelVersionsComponent: React.FC = () => {
  // const data = useLazyLoadQuery<ModelVersionsPageQuery>(modelVersionsPageQuery, {});
  // const markdown = useMemo(() => data?.textual_content?.content && data?.textual_content?.content[0]?.text, [data]);

  return (
    <PageContainer>
      <Grid container columns={{ sm: 6, md: 8, lg: 12 }}>
        <Grid item xs={2} />
        <Grid item xs={8}>
          <Grid container spacing={2} columns={{ sm: 6, md: 8, lg: 12 }}>
            <Grid item xs={12}>
              <TitleContainer>
                <Typography variant="h2">Model Versions</Typography>
                <Typography variant="body1">
                  <strong>This is a log of the NSHM versions. Updates to the model are recorded here.</strong>
                </Typography>
              </TitleContainer>
            </Grid>
            <Grid item xs={12}>
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2} />
      </Grid>
    </PageContainer>
  );
};

const ModelVersionsPage: React.FC = () => {
  return (
    <React.Suspense fallback={<SimpleBackdrop />}>
      <ModelVersionsComponent />
    </React.Suspense>
  );
};

// export const modelVersionsPageQuery = graphql`
//   query ModelVersionsPageQuery {
//     textual_content(index: "CHANGELOG.md") {
//       ok
//       content {
//         index
//         content_type
//         text
//         created
//         author
//         tags
//         status
//       }
//     }
//   }
// `;
export default ModelVersionsPage;
