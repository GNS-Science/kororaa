import React, { useEffect, useState } from 'react';
import { Box, Checkbox, Menu, MenuItem, Button } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { flexParentCenter } from '../../utils/styleUtils';

export type MapViewControlsState = {
  showSurfaces: boolean;
  showAnimation: boolean;
  showMfd: boolean;
  showTraceLegend: boolean;
};

export const mapViewControlsReducer = (state: MapViewControlsState, newState: Partial<MapViewControlsState>) => {
  return {
    ...state,
    ...newState,
  };
};

interface MapViewControlsProps {
  initState: {
    showSurfaces: boolean;
    showAnimation: boolean;
    showMfd: boolean;
    showTraceLegend: boolean;
  };
  onHandleChange: React.Dispatch<Partial<MapViewControlsState>>;
}

const MapViewControls: React.FC<MapViewControlsProps> = ({ initState, onHandleChange }: MapViewControlsProps) => {
  const [showSurfacesChecked, setShowSurfacesChecked] = useState<boolean>(initState.showSurfaces);
  const [showAnimationChecked, setShowAnimationChecked] = useState<boolean>(initState.showAnimation);
  const [showMfdChecked, setShowMfdChecked] = useState<boolean>(initState.showMfd);
  const [showTraceLegendChecked, setShowTraceLegendChecked] = useState<boolean>(initState.showTraceLegend);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    onHandleChange({ showAnimation: showAnimationChecked, showSurfaces: showSurfacesChecked, showMfd: showMfdChecked, showTraceLegend: showTraceLegendChecked });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSurfacesChecked, showAnimationChecked, showMfdChecked, showTraceLegendChecked]);

  return (
    <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'column' }}>
      <Button variant="outlined" onClick={handleClick}>
        Map View Options
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <FormGroup>
          <MenuItem>
            <FormControlLabel
              labelPlacement="end"
              control={
                <Checkbox
                  checked={showSurfacesChecked}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setShowSurfacesChecked(event?.target.checked);
                  }}
                />
              }
              label="show fault surfaces"
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              labelPlacement="end"
              control={
                <Checkbox
                  checked={showAnimationChecked}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setShowAnimationChecked(event?.target.checked);
                  }}
                />
              }
              label="show animation"
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              labelPlacement="end"
              control={
                <Checkbox
                  checked={showMfdChecked}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setShowMfdChecked(event?.target.checked);
                  }}
                />
              }
              label="show MFD plot"
            />
          </MenuItem>
          <MenuItem>
            <FormControlLabel
              labelPlacement="end"
              control={
                <Checkbox
                  checked={showTraceLegendChecked}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setShowTraceLegendChecked(event?.target.checked);
                  }}
                />
              }
              label="show trace legend"
            />
          </MenuItem>
        </FormGroup>
      </Menu>
    </Box>
  );
};

export default MapViewControls;
