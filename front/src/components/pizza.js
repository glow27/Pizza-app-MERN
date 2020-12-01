import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Snackbar,
  Typography,
  TextField,
} from '@material-ui/core';
import LocalPizzaOutlinedIcon from '@material-ui/icons/LocalPizzaOutlined';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { addPizza } from '../redux/actionCreator';

const theme = createMuiTheme({
  overrides: {
    MuiSnackbarContent: {
      root: {
        backgroundColor: 'orange',
        justifyContent: 'center',
        width: '3rem',
        '@media (min-width: 600px)': {
          minWidth: '0',
        },
      },
    },
  },
});

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
    width: '4rem',
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default function Pizza({ pizza }) {
  const classes = useStyles();
  const { img, title } = pizza;
  const currency = useSelector((state) => state.cart.usd);
  const price = currency ? pizza.price : pizza.price * 0.85;
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);

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
          value={qty}
          id="outlined-number"
          label="qty"
          type="number"
          onChange={(e) => setQty(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          className={classes.textField}
          InputProps={{ inputProps: { min: 1, max: 99 } }}
        />
        <Typography gutterBottom variant="h6" component="h2">
          x {price.toFixed(2)}
          {currency ? '$' : '€'}
        </Typography>
        <Button
          className={classes.btn}
          color="default"
          onClick={() => {
            dispatch(addPizza({ title, price, qty: +qty }));
            setOpen(true);
          }}
        >
          <AddShoppingCartIcon />
        </Button>
        <ThemeProvider theme={theme}>
          <Snackbar
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            autoHideDuration={500}
            onClose={() => setOpen(false)}
            message={
              <>
                <AddOutlinedIcon />
                <LocalPizzaOutlinedIcon />
              </>
            }
          />
        </ThemeProvider>
      </CardActions>
    </Card>
  );
}
