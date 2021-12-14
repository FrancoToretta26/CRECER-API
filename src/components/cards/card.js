import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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
      <a href="/calendarioVacunacion">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.farmaceuticonline.com/wp-content/uploads/2019/07/vacunes-infantils.jpg"
          title="Calendario de Vacunación"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Calendario de Vacunación
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Consulte aquí el calendario de vacunación y controle las vacunas aplicadas
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
