import React, { useState } from 'react';
import { Box, Checkbox, FormLabel } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormHelperText from '@mui/material/FormHelperText';

import { flexParentCenter } from '../../utils/styleUtils';

interface MapViewControlsProps {
  showSurfaces: boolean;
  showAnimation: boolean;
}

const MapViewControls: React.FC<MapViewControlsProps> = ({ showSurfaces, showAnimation }: MapViewControlsProps) => {
  const [showSurfacesChecked, setShowSurfacesChecked] = useState<boolean>(showSurfaces);
  const [showAnimationChecked, setShowAnimationChecked] = useState<boolean>(showAnimation);

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
