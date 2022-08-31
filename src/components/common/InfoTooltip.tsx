import React from 'react';
import { styled } from '@mui/material/styles';
import { Tooltip, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const StyledTooltip = styled(Tooltip)(() => ({
  bottom: '10px',
  right: '6px',
}));

interface InfoTooltipProps {
  text: string;
}

export const InfoTooltip: React.FC<InfoTooltipProps> = ({ text }) => {
  return (
    <StyledTooltip title={text} arrow>
      <IconButton style={{ backgroundColor: 'transparent' }}>
        <InfoIcon fontSize="small" />
      </IconButton>
    </StyledTooltip>
  );
};

export default InfoTooltip;
