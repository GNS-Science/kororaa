import React from 'react';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Card, CardContent, CardMedia, CardActions, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

interface MenuCardProps {
  title: string;
  text: string;
  img: string;
  url: string;
}

const MenuCard: React.FC<MenuCardProps> = ({ title, text, img, url }: MenuCardProps) => {
  return (
    <Grid item xs={3}>
      <Card>
        <CardActionArea component={Link} to={url}>
          <CardContent>
            <Typography variant="h5">{title}</Typography>
            <Typography>{text}</Typography>
          </CardContent>
          <CardMedia component="img" height="250px" image={img} sx={{ objectFit: 'cover' }} />
          <CardActions>
            <Button size="small" component={Link} to={url}>
              More
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default MenuCard;
