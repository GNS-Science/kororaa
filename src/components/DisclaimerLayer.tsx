import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Modal, Typography } from '@mui/material';
import LocalStorageContext from '../contexts/localStorage';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Paper = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '80%',
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2, 4, 5),
}));

interface DisclaimerLayerProps {
  children: React.ReactNode;
}

const DisclaimerLayer: React.FC<DisclaimerLayerProps> = ({ children }: DisclaimerLayerProps) => {
  const currentDisclaimerVersion = process.env.REACT_APP_DISCLAIMER_VERSION as string;

  const { disclaimerVersion, setDisclaimerVersion } = useContext(LocalStorageContext);

  const [open, setOpen] = useState<boolean>(disclaimerVersion !== currentDisclaimerVersion);

  const handleAccept = () => {
    setDisclaimerVersion(currentDisclaimerVersion);
    setOpen(false);
  };

  return (
    <>
      <StyledModal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Paper>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Button onClick={handleAccept}>Accept</Button>
        </Paper>
      </StyledModal>
      {children}
    </>
  );
};

export default DisclaimerLayer;
