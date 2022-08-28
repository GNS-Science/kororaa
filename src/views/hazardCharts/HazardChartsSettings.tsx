import React from 'react';
import { FormControlLabel, Menu, Checkbox, MenuItem, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import { HazardPageState } from './hazardPageReducer';

interface HazardChartsSettingsProps {
  spectral: boolean;
  state: HazardPageState;
  dispatch: React.Dispatch<Partial<HazardPageState>>;
}

export const HazardChartsSettings: React.FC<HazardChartsSettingsProps> = ({ spectral, state, dispatch }: HazardChartsSettingsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
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
        {!spectral && (
          <>
            <MenuItem>
              <FormControlLabel
                labelPlacement="end"
                control={
                  <Checkbox
                    checked={state.showUncertainty}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      dispatch({ showUncertainty: event?.target.checked });
                    }}
                  />
                }
                label="Uncertainty"
              />
            </MenuItem>
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
                label="log/linear"
              />
            </MenuItem>
          </>
        )}
        <MenuItem>Print</MenuItem>
      </Menu>
    </div>
  );
};
