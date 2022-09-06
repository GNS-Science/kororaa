import React from 'react';
import { FormControlLabel, Menu, Checkbox, MenuItem, IconButton, Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { toJpeg } from 'html-to-image';

import { HazardPageState } from './hazardPageReducer';

interface HazardChartsSettingsProps {
  spectral: boolean;
  state: HazardPageState;
  dispatch: React.Dispatch<Partial<HazardPageState>>;
}

const HazardChartsSettings: React.FC<HazardChartsSettingsProps> = ({ spectral, state, dispatch }: HazardChartsSettingsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const downloadHazard = () => {
    const chartType = spectral ? 'spectraChart' : 'hazardChart';
    const element = document.getElementById(chartType);
    if (element === null) {
      setAnchorEl(null);
      return;
    }
    toJpeg(element, { quality: 0.95 }).then((dataUrl: string) => {
      const link = document.createElement('a');
      link.download = `${spectral ? 'spectra' : 'hazard'} chart.jpeg`;
      link.href = dataUrl;
      link.click();
    });
    setAnchorEl(null);
  };

  return (
    <div style={{ height: '0px' }}>
      <IconButton
        sx={{ left: '30px', zIndex: 10000 }}
        id="positioned-button"
        aria-controls={open ? 'positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <SettingsIcon></SettingsIcon>
      </IconButton>
      <Menu
        id="positioned-menu"
        aria-labelledby="positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>
          <FormControlLabel
            labelPlacement="end"
            control={
              <Checkbox
                checked={spectral ? state.spectralUncertainty : state.hazardUncertainty}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  spectral ? dispatch({ spectralUncertainty: event?.target.checked }) : dispatch({ hazardUncertainty: event?.target.checked });
                }}
              />
            }
            label="uncertainty"
          />
        </MenuItem>
        {!spectral && (
          <MenuItem>
            <FormControlLabel
              labelPlacement="end"
              control={
                <Checkbox
                  checked={state.xScale === 'linear'}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    dispatch({ xScale: event?.target.checked ? 'linear' : 'log' });
                  }}
                />
              }
              label="linear x-scale"
            />
          </MenuItem>
        )}
        <Button variant="outlined" sx={{ width: '70%', margin: '5px 15% 5px 15%' }} onClick={downloadHazard}>
          Download
        </Button>
      </Menu>
    </div>
  );
};

export default HazardChartsSettings;
