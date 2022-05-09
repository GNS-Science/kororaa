import React from 'react';
import { styled } from '@mui/material';
import { Card, CardContent, CardMedia, CardActions, Typography, Button } from '@mui/material';

const StyledCard = styled(Card)({
  width: '45%',
  height: '40%',
});

interface CardButtonProps {
  title: string;
  text: string;
  img: string;
}

const CardButton: React.FC<CardButtonProps> = ({ title, text, img }: CardButtonProps) => {
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

export default CardButton;
