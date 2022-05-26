import React from 'react';
import { SelectControl } from '@gns-science/toshi-nest';
import { Button, Input, FormControl, InputLabel, FormHelperText } from '@mui/material';

import { useFormik } from 'formik';
import * as yup from 'yup';

import VerticalControlsBar from '../../components/common/VerticalControlsBar';
import { getHazardTableOptions } from '../../services/hazardPage.service';
import { hazardChartsMockData } from '../../constants/hazardChartsMockData';

interface HazardCurvesSelections {
  lat: number | undefined;
  lon: number | undefined;
  vs30: string;
  spectralPeriod: string;
  POE: 'None' | '2%' | '10%';
}
interface HazardChartsControlsProps {
  selections: HazardCurvesSelections;
  setSelections: (values: HazardCurvesSelections) => void;
}

const HazardChartsControls: React.FC<HazardChartsControlsProps> = ({ selections, setSelections }: HazardChartsControlsProps) => {
  const validationSchema = yup.object({
    lat: yup.number().required('Lat is required'),
  });

  const hazardTableOptions = getHazardTableOptions(hazardChartsMockData);

  const formik = useFormik({
    initialValues: {
      lat: selections.lat,
      lon: selections.lon,
      vs30: selections.vs30,
      spectralPeriod: selections.spectralPeriod,
      POE: selections.POE,
    },
    validationSchema: validationSchema,
    onSubmit: (values: HazardCurvesSelections) => {
      setSelections(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <VerticalControlsBar>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Latitude</InputLabel>
            <Input id="component-helper" name="lat" value={formik.values.lat} onChange={formik.handleChange} aria-describedby="component-helper-text" />
            <FormHelperText id="component-helper-text">Decimal Degrees</FormHelperText>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Longitude</InputLabel>
            <Input id="component-helper" name="lon" value={formik.values.lon} onChange={formik.handleChange} aria-describedby="component-helper-text" />
            <FormHelperText id="component-helper-text">Decimal Degrees, -180:180</FormHelperText>
          </FormControl>
          <SelectControl options={hazardTableOptions.vs30} selection={formik.values.vs30} setSelection={formik.handleChange} name="Vs30" />
          <SelectControl options={hazardTableOptions.spectralPeriod} selection={formik.values.spectralPeriod} setSelection={formik.handleChange} name="Spectral Period" />
          <SelectControl options={['None', '2%', '10%']} selection={formik.values.POE} setSelection={formik.handleChange} name="Probability of Exceedance" />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </VerticalControlsBar>
      </form>
    </>
  );
};

export default HazardChartsControls;
