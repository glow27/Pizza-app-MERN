import React, { useState } from 'react';
import { TextField, ListItemText, IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { editCart, delPizza } from '../redux/actionCreator';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '4rem',
  },
}));

export default function CartItem({ pizza }) {
  const classes = useStyles();
  const usd = useSelector((state) => state.cart.usd);
  const [qty, setQty] = useState(pizza.qty);
  const dispatch = useDispatch();

  return (
    <>
      <IconButton onClick={() => dispatch(delPizza(pizza.title))}>
        <HighlightOffOutlinedIcon fontSize="small" />
      </IconButton>
      <ListItemText
        primary={`${pizza.title} ${pizza.price} ${usd ? '$' : '€'}`}
      />
      <TextField
        size="small"
        className={classes.textField}
        value={qty}
        id="outlined-number"
        label="qty"
        type="number"
        onChange={(e) => {
          setQty(e.target.value);
          dispatch(editCart({ title: pizza.title, qty: e.target.value }));
        }}
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        InputProps={{ inputProps: { min: 0, max: 99 } }}
      />
    </>
  );
}
