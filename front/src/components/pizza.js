import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '30vw',
    margin: theme.spacing(0.5),
  },
  media: {
    height: '30vw',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '7ch',
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
  },
 
}));

export default function Pizza({ pizza }) {
  const classes = useStyles();
  const { img, title, price } = pizza;

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={img} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </Typography>
      </CardContent>

      <CardActions className={classes.actions}>
      <TextField
      size="small"
      defaultValue="1"
          id="outlined-number"
          label="qty"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          className={classes.textField}
          InputProps={{ inputProps: { min: 1, max: 99 } }}
        />
      <Typography gutterBottom variant="h6" component="h2">
          x {price}$
        </Typography>
        <Button className={classes.btn} color="default">
         <AddShoppingCartIcon/>
        </Button>
      </CardActions>
    </Card>
  );
}
