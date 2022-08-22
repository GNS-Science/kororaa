import React from 'react';
import { styled } from '@mui/material/styles';

const Control = styled('span')({
  margin: 10,
  width: 'auto',
});

interface CustomControlsBarProps {
  children: React.ReactNode;
  direction: 'row' | 'column';
}

const CustomControlsBar: React.FC<CustomControlsBarProps> = ({ children, direction }: CustomControlsBarProps) => {
  const ControlsContainer = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: direction,
  });

  const childrenWithMargin = React.Children.map(children, (child) => {
    return <Control>{child}</Control>;
  });

  return <ControlsContainer>{childrenWithMargin}</ControlsContainer>;
};

export default CustomControlsBar;
