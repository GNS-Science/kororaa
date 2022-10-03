import React, { useMemo } from 'react';
import { FormControlLabel, Menu, Checkbox, MenuItem, IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import SettingsIcon from '@mui/icons-material/Settings';
import { toJpeg } from 'html-to-image';

import StyledCSVLink from '../../components/common/StyledCSVLink';
import { getHazardCSVData, getLocationList } from './hazardPage.service';
import { getSpectralCSVData } from '../../services/spectralAccel/spectralAccel.service';
import { getSpectralAccelUncertaintyCurves } from '../../services/spectralAccel/spectralAccel.service';
import { HazardPageState } from './hazardPageReducer';
import { HazardChartsPlotsViewQuery$data } from './__generated__/HazardChartsPlotsViewQuery.graphql';

interface HazardChartsSettingsProps {
  data: HazardChartsPlotsViewQuery$data;
  spectral: boolean;
  state: HazardPageState;
  dispatch: React.Dispatch<Partial<HazardPageState>>;
}

const StyledIconButton = styled(IconButton)(() => ({
  paddingLeft: 0,
  textDecoration: 'none',
}));

const HazardChartsSettings: React.FC<HazardChartsSettingsProps> = ({ data, spectral, state, dispatch }: HazardChartsSettingsProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const locationList = useMemo(() => getLocationList(data), [data]);
  const saCurves = useMemo(() => getSpectralAccelUncertaintyCurves(state.vs30s, locationList, data, state.poe, state.spectraXScale), [locationList, state, data]);
  const saCSVData = useMemo(() => getSpectralCSVData(saCurves, state.poe), [saCurves, state.poe]);

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
      link.download = spectral ? `UHS_${state.poe}_in_50yr.jpeg` : 'hazard_chart.jpeg';
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
        <Tooltip title="Chart Settings and Downloads" arrow placement="right">
          <SettingsIcon />
        </Tooltip>
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
        <MenuItem>
          <FormControlLabel
            labelPlacement="end"
            control={
              <Checkbox
                checked={spectral ? state.spectraXScale === 'linear' : state.hazardXScale === 'linear'}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  spectral ? dispatch({ spectraXScale: event?.target.checked ? 'linear' : 'log' }) : dispatch({ hazardXScale: event?.target.checked ? 'linear' : 'log' });
                }}
              />
            }
            label="linear x-scale"
          />
        </MenuItem>
        <MenuItem onClick={downloadHazard}>
          <StyledIconButton>
            <ImageIcon />
          </StyledIconButton>
          get image
        </MenuItem>
        <MenuItem>
          {spectral ? (
            <StyledCSVLink data={saCSVData} filename="spectral-acceleration-curves.csv">
              <StyledIconButton>
                <TextSnippetIcon />
              </StyledIconButton>
              get CSV
            </StyledCSVLink>
          ) : (
            <StyledCSVLink data={getHazardCSVData(data)} filename="hazard-curves.csv">
              <StyledIconButton>
                <TextSnippetIcon />
              </StyledIconButton>
              get CSV
            </StyledCSVLink>
          )}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default HazardChartsSettings;
