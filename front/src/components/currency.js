import React from 'react';
import { changeCurrency, cartCurrency } from '../redux/actionCreator';
import { useDispatch } from 'react-redux';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  radio: {
    verticalAlign: 'middle',
  },
});

export default function Currency() {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <FormControl className={classes.radio}>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="usd"
        onChange={(e) => {
          dispatch(changeCurrency());
          dispatch(cartCurrency(e.target.value));
        }}
      >
        <FormControlLabel
          value="usd"
          control={<Radio color="default" />}
          label="usd"
        />
        <FormControlLabel
          value="eur"
          control={<Radio color="default" />}
          label="eur"
        />
      </RadioGroup>
    </FormControl>
  );
}