import React from 'react';
import { styled } from '@mui/material/styles';
import { FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent, Tooltip } from '@mui/material';

export interface SelectControlWithDisableProps {
  options: string[];
  selection: string;
  setSelection: (selection: string) => void;
  name: string;
  disabled?: boolean;
  tooltip?: string;
}

const SelectControlContainer = styled('div')({
  minWidth: 200,
  maxWidth: 300,
});

const SelectControlWithDisable: React.FC<SelectControlWithDisableProps> = ({ options, selection, setSelection, name, disabled, tooltip = '' }: SelectControlWithDisableProps) => {
  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = (event.target.value as string) || '';
    setSelection(value);
  };

  return (
    <SelectControlContainer>
      <FormControl disabled={disabled} variant="standard" fullWidth>
        {tooltip ? (
          <Tooltip title={tooltip} arrow placement="top">
            <InputLabel>{name}</InputLabel>
          </Tooltip>
        ) : (
          <InputLabel>{name}</InputLabel>
        )}
        <Select labelId={`report-hash-label`} label={name} name={name} value={selection} onChange={handleChange} input={<Input />} variant="standard">
          {options.map((opt: string) => (
            <MenuItem key={opt} value={opt}>
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </SelectControlContainer>
  );
};

export default SelectControlWithDisable;
