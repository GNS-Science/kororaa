import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import ReactMarkdown from 'react-markdown';
// import { graphql } from 'babel-plugin-relay/macro';
// import { useLazyLoadQuery } from 'react-relay';
// import { ModelVersionsPageQuery } from './__generated__/ModelVersionsPageQuery.graphql';
import SimpleBackdrop from '../../components/common/SimpleBackdrop';
import { HAZARD_MODEL } from '../../utils/environmentVariables';

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
### NSHM_v1.0.4 - 2023-05-05
Dip orientation of Puysegur fault sections corrected.

### NSHM_v1.0.3 - 2023-03-08
Fault dip direction for crustal faults corrected.

### NSHM_v1.0.2 - 2023-02-01
Kermadec interface location corrected. A bug had placed sources east of 180 degrees longitude in the wrong position.

### NSHM_v1.0.1 - 2023-01-06
Statistical aggregation of hazard curves corrected. A bug introduced a small error (<1%) in the mean hazard curve at high probability / low values of shaking.

### NSHM_v1.0.0 - 2022-10-04

Initial release of the NZ NSHM 2022 revision

#### Bug Advisory: April 2023

We have identified some errors in NSHM_v1.0.0. These errors are being corrected and are unlikely to affect any NSHM results-based decision making.

A bug in internationally sourced computer modelling code affected fault dips in the final step of the hazard calculations and affected every result from the modelling. However, tests show that the correction will introduce negligible hazard changes for most of the country. One particular section of the Alpine Fault was affected, and the fault was moved farther or nearer to certain locations. The mean hazard estimate for Franz Joseph has effectively remain unchanged while the mean hazard estimate for Aoraki/Mt Cook has increased. These changes are unlikely to affect any NSHM results-based decision making.
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
              <Typography variant="body1">
                <strong>THe current model version is {HAZARD_MODEL}</strong>
              </Typography>
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
