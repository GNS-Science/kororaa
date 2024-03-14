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
    } else if (value > 10) {
      setValue(10);
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
            step={1}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={1}
            max={10}
          />
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 10,
              type: "number",
              "aria-labelledby": "input-slider",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
