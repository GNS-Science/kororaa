import React from 'react';
import { styled } from '@mui/material/styles';

const Control = styled('span')({
  margin: 10,
  width: 'auto',
});

const ControlsContainer = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  flexDirect: 'colum',
});

interface CustomControlsBarProps {
  children: React.ReactNode;
}

const CustomControlsBar: React.FC<CustomControlsBarProps> = ({ children }: CustomControlsBarProps) => {
  const childrenWithMargin = React.Children.map(children, (child) => {
    return <Control>{child}</Control>;
  });

  return <ControlsContainer>{childrenWithMargin}</ControlsContainer>;
};

export default CustomControlsBar;
