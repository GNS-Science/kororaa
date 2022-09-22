import React from 'react';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export interface MenuCardProps {
  title: string;
  text: string;
  img: string;
  url: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, text, img, url }: MenuCardProps) => {
  return (
    <Grid item xs={2}>
      <Card>
        <CardActionArea component={Link} to={url}>
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography>{text}</Typography>
          </CardContent>
          <CardMedia component="img" height="225px" image={img} sx={{ objectFit: 'cover' }} />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MenuCard;
