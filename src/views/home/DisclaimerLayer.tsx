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
          {/*          <Typography id="modal-modal-description-bugfix" sx={{ mt: 2 }}>
            <h4>BUG ADVISORY: April 13, 2023</h4>
            We have identified some errors in the current model (NSHM_v1.0.0) that impact hazard levels around Fiordland, South Island. This warning will removed once the revised model is
            released to the web portal, which is expected in the next few weeks. For model version details and changes please see the Resources : Model Versions page.
          </Typography>*/}
          <Typography id="modal-modal-description-bugfix" sx={{ mt: 2 }}>
            <h4>BUG FIX NOTICE: April 13, 2023</h4>
            NSHM model and forecast errors resulting from a bug identified in the source code have been fixed, and the related data sets (hazard curves, maps etc) are now being corrected. This notice
            will be removed once all the data sets are corrected on the web portal – expected in the next few weeks.
          </Typography>
          <Button onClick={handleAccept}>Accept</Button>
        </Paper>
      </StyledModal>
      {children}
    </>
  );
};

export default DisclaimerLayer;
