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

const ControlsContainerRow = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  flexDirection: 'row',
});

const ControlsContainerColumn = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  flexDirection: 'column',
});

const CustomControlsBar: React.FC<CustomControlsBarProps> = ({ children, direction }: CustomControlsBarProps) => {
  const childrenWithMargin = React.Children.map(children, (child) => {
    return <Control>{child}</Control>;
  });

  if (direction === 'row') return <ControlsContainerRow>{childrenWithMargin}</ControlsContainerRow>;
  else return <ControlsContainerColumn>{childrenWithMargin}</ControlsContainerColumn>;
};

export default CustomControlsBar;
