import React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Dialog, DialogContent, DialogActions, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ReactMarkdown from 'react-markdown';

interface InfoTooltipProps {
  markdown: string;
}

const StyledIconButton = styled(IconButton)(() => ({
  bottom: '10px',
  right: '3px',
}));

export const InfoTooltip: React.FC<InfoTooltipProps> = ({ markdown }) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <StyledIconButton onClick={handleOpen}>
        <InfoIcon />
      </StyledIconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default InfoTooltip;
