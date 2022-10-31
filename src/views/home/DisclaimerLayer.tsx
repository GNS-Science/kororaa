import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Link, Button, Modal, Typography } from '@mui/material';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Paper = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '60%',
  backgroundColor: theme.palette.navbar.main,
  padding: theme.spacing(2, 4, 5),
  border: 'none',
  '@media (max-width: 600px)': {
    width: '80%',
  },
}));

interface DisclaimerLayerProps {
  children: React.ReactNode;
}

const DisclaimerLayer: React.FC<DisclaimerLayerProps> = ({ children }: DisclaimerLayerProps) => {
  const currentDisclaimerVersion = process.env.REACT_APP_DISCLAIMER_VERSION as string;
  const localStorageDisclaimerVersion = localStorage.getItem('disclaimer-version');

  const [open, setOpen] = useState<boolean>(localStorageDisclaimerVersion !== currentDisclaimerVersion);

  const handleAccept = () => {
    localStorage.setItem('disclaimer-version', currentDisclaimerVersion);
    setOpen(false);
  };

  return (
    <>
      <StyledModal open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description modal-modal-description2">
        <Paper>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Disclaimer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This output has been prepared by the Institute of Geological and Nuclear Sciences Limited (GNS Science). GNS Science accepts no responsibility for any use of or reliance on any contents of
            this output by any person, on any ground, for any loss, damage or expense arising from such use or reliance.
          </Typography>
          <Typography id="modal-modal-description2" sx={{ mt: 2 }}>
            This site provides only seismic hazard results. Please see&nbsp;
            <Link underline="hover" color="inherit" target="_blank" rel="noopener" href="https://www.building.govt.nz/getting-started/seismic-work-programme/national-seismic-hazard-model">
              MBIE for information related to engineering design and the NSHM.
            </Link>
          </Typography>
          <Button onClick={handleAccept}>Accept</Button>
        </Paper>
      </StyledModal>
      {children}
    </>
  );
};

export default DisclaimerLayer;
