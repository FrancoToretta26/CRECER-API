import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MaterialUiComponent from "@material-ui/core";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      <a href="/calculoPercentiles">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdWQWutmwYOHiBeqkOHDib8hKuugDhdvF9WQ&usqp=CAU"
          title="Control Pediatrico"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Consulte Percentiles
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Consulte los percentiles de peso y altura para sus hijos.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </a>
    </div>

    
  );
}
