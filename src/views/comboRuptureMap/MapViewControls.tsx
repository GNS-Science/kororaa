import React, { useEffect, useState } from 'react';
import { Box, Checkbox, FormLabel } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormHelperText from '@mui/material/FormHelperText';

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

  useEffect(() => {
    onHandleChange({ showAnimation: showAnimationChecked, showSurfaces: showSurfacesChecked, showMfd: showMfdChecked, showTraceLegend: showTraceLegendChecked });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showSurfacesChecked, showAnimationChecked, showMfdChecked, showTraceLegendChecked]);

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
      </FormGroup>
    </Box>
  );
};

export default MapViewControls;
