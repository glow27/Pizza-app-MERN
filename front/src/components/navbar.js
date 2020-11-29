import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Cart from './cart';

import {changeCurrency, cartCurrency} from '../redux/actionCreator';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  
  navbar: {
    backgroundColor: 'rgb(255, 225, 89)',
    height: '10vh',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    position: 'fixed',
    width: '100%',
    zIndex: 100
  },
  btn: {
    height: '100%',
    width: '6rem',
  },
  radio: {
    verticalAlign: 'middle'
  },
  logo: {
    margin: '0 2rem'
  }
});

export default function NavDrawer() {
  const classes = useStyles();
  const [cartOpen, setCartOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart);
  const usd = useSelector(state => state.pizza.usd)
  const total = cart.reduce((a,b) => a + b.qty * b.price , 0)

  const toggleDrawer = (open) => (event) => {
    setCartOpen(open);
  };

  

  return (
    <div className={classes.navbar}>
      <Button onClick={() => {history.push('/')}}>
      <h2 className={classes.logo}>Super Pizza</h2>
      </Button>
      <div>

      <FormControl className={classes.radio}>
      <RadioGroup row aria-label="position" name="position" defaultValue="usd" onChange={(e) => {
        dispatch(changeCurrency()); dispatch(cartCurrency(e.target.value))
      }}>
      <FormControlLabel value="usd" control={<Radio color="default" />} label="usd" />
      <FormControlLabel value="eur" control={<Radio color="default" />} label="eur" />
      </RadioGroup>
      </FormControl>

        <Button className={classes.btn} onClick={toggleDrawer(true)}>
          <ShoppingCartOutlinedIcon />
          ({total.toFixed(2)}{usd ? '$' : '€'})
        </Button>
        <Drawer open={cartOpen} onClose={toggleDrawer(false)}>
          <Cart close={toggleDrawer}/>
        </Drawer>
        <Button  onClick={() => {history.push('/auth')}} className={classes.btn}>
          <AccountCircleOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}
