import React from 'react';
import { styled } from '@mui/material';
import { Card, CardContent, CardMedia, CardActions, Typography, Button } from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '45%',
  height: '40%',
  [theme.breakpoints.down('md')]: {
    width: '80%',
    margin: 30,
  },
}));

interface MenuCardProps {
  title: string;
  text: string;
  img: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, text, img }: MenuCardProps) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography>{text}</Typography>
      </CardContent>
      <CardMedia component="img" height="300px" image={img} />
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </StyledCard>
  );
};

export default MenuCard;
