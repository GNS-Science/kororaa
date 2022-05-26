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

interface VerticalControlsBarProps {
  children: React.ReactNode;
}
const VerticalControlsBar: React.FC<VerticalControlsBarProps> = ({ children }: VerticalControlsBarProps) => {
  const childrenWithMargin = React.Children.map(children, (child) => {
    return <Control>{child}</Control>;
  });
  return <ControlsContainer>{childrenWithMargin}</ControlsContainer>;
};

export default VerticalControlsBar;
