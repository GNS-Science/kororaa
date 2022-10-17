import React from 'react';
import { Typography } from '@mui/material';
import * as changelog from '../../../CHANGELOG.md';
import ReactMarkdown from 'react-markdown';

const ChangelogPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h2">Changelog</Typography>
      <ReactMarkdown>{changelog}</ReactMarkdown>
    </div>
  );
};

export default ChangelogPage;
