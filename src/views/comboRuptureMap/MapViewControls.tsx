import React, { useEffect, useState } from 'react';
import { Box, Checkbox, FormLabel } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormHelperText from '@mui/material/FormHelperText';

import { flexParentCenter } from '../../utils/styleUtils';

export type MapViewControlsState = {
  showSurfaces: boolean;
  showAnimation: boolean;
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
  };
  onHandleChange: React.Dispatch<Partial<MapViewControlsState>>;
}

const MapViewControls: React.FC<MapViewControlsProps> = ({ initState, onHandleChange }: MapViewControlsProps) => {
  const [showSurfacesChecked, setShowSurfacesChecked] = useState<boolean>(initState.showSurfaces);
  const [showAnimationChecked, setShowAnimationChecked] = useState<boolean>(initState.showAnimation);

  useEffect(() => {
    onHandleChange({ showAnimation: showAnimationChecked, showSurfaces: showSurfacesChecked });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSurfacesChecked, showAnimationChecked]);

  return (
    <Box sx={{ width: '100%', ...flexParentCenter, flexDirection: 'column' }}>
      <FormLabel>Map view options</FormLabel>
      <FormGroup>
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
      </FormGroup>
    </Box>
  );
};

export default MapViewControls;
