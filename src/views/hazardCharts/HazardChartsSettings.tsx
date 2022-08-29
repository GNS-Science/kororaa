import React, { useCallback } from 'react';
import { FormControlLabel, Menu, Checkbox, MenuItem, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { toPng } from 'html-to-image';

import { HazardPageState } from './hazardPageReducer';

interface HazardChartsSettingsProps {
  ref: React.RefObject<HTMLDivElement>;
  spectral: boolean;
  state: HazardPageState;
  dispatch: React.Dispatch<Partial<HazardPageState>>;
}

export const HazardChartsSettings: React.FC<HazardChartsSettingsProps> = ({ ref, spectral, state, dispatch }: HazardChartsSettingsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      console.log('null');
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div style={{ height: '0px' }}>
      <IconButton
        sx={{ left: '515px', zIndex: 10000 }}
        // sx={{ left: '30px', zIndex: 10000 }}
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
            label="Uncertainty"
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
              label="log/linear"
            />
          </MenuItem>
        )}
        <MenuItem onClick={onButtonClick}>Print</MenuItem>
      </Menu>
    </div>
  );
};
