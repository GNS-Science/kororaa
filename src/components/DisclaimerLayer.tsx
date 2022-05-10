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
  width: '60%',
  backgroundColor: theme.palette.info.main,
  padding: theme.spacing(2, 4, 5),
  border: 'none',
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
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Disclaimer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This output has been prepared by the Institute of Geological and Nuclear Sciences Limited (GNS Science). GNS Science accepts no responsibility for any use of of or reliance on any contents
            of this output by any person, on any ground, for any loss, damage or expense arising from such use or reliance.
          </Typography>
          <Button onClick={handleAccept}>Accept</Button>
        </Paper>
      </StyledModal>
      {children}
    </>
  );
};

export default DisclaimerLayer;
