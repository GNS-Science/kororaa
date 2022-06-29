import React from 'react';
import { Checkbox, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { styled } from '@mui/material/styles';

const MultiSelectContainer = styled('div')({
  margin: 10,
  minWidth: 200,
  maxWidth: 300,
});

export interface SelectControlMultiple {
  options: string[];
  selection: string[];
  setSelection: (selections: string[]) => void;
  name: string;
}

const SelectControlMultiple: React.FC<SelectControlMultiple> = ({ options, selection, setSelection, name }: SelectControlMultiple) => {
  const handleChange = (event: SelectChangeEvent<string[]>) => {
    setSelection(event.target.value as string[]);
  };

  return (
    <MultiSelectContainer>
      <FormControl variant="standard" fullWidth>
        <InputLabel>{name}</InputLabel>
        <Select
          name={name}
          value={selection}
          multiple
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => {
            const selectedArray = selected as string[];
            if (selectedArray.length === 1) return selection[0];
            if (selectedArray.length > 1) return 'Multiple selected';
          }}
          variant="standard"
        >
          {options.map((opt) => (
            <MenuItem key={opt} value={opt}>
              <Checkbox checked={selection.indexOf(opt) > -1} />
              {opt}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </MultiSelectContainer>
  );
};

export default SelectControlMultiple;
