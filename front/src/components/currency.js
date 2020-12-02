import React from 'react';
import { changeCurrency, calculateCurrency } from '../redux/actionCreator';
import { useDispatch, useSelector } from 'react-redux';
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

/**changes currency of the app */
export default function Currency() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const usd = useSelector((state) => state.cart.usd);

  return (
    <FormControl className={classes.radio}>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue={usd ? 'usd' : 'eur'}
        onChange={(e) => {
          dispatch(changeCurrency());
          dispatch(calculateCurrency(e.target.value));
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
