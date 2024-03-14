import React from "react";
import MuiInput from "@mui/material/Input";
import { Tooltip, Box, Grid, Typography, Slider, styled } from "@mui/material";

const Input = styled(MuiInput)`
  width: 42px;
`;

export interface SliderWithInputProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
  tooltipContent?: string;
}

export const SliderWithInput: React.FC<SliderWithInputProps> = ({
  label,
  value,
  setValue,
  tooltipContent,
}: SliderWithInputProps) => {
  const handleSliderChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box sx={{ width: 200 }}>
      <Tooltip title={tooltipContent || ""} arrow placement="top">
        <Typography id="input-slider" gutterBottom>
          {label}
        </Typography>
      </Tooltip>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            step={10}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={10}
            max={100}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 10,
              max: 100,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
            sx={{ width: 50 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
