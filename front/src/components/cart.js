import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import CartItem from './cartItem.js';
import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  list: {
    width: '40vw',
  },
  empty: {
    textAlign: 'center'
  },
  total: {
    textAlign: 'right',
    marginRight: '1rem'
  },
  btn: {
    left: '15vw',
    textDecoration: 'none',
    color: 'black'
  },
  
});

export default function Cart({close}) {
  const classes = useStyles();
  const cart = useSelector(state => state.cart);
  const usd = useSelector(state => state.pizza.usd)
  const dispatch = useDispatch();
  const total = cart.reduce((a,b) => a + b.qty *  b.price , 0)
  

  return (<>
  <div className={classes.list} >
    {cart.length ? <List>
        {cart.map((el, index) => (
          <ListItem key={index}>
            <CartItem pizza={el} />
          </ListItem>
        ))}
      </List> : <p className={classes.empty}>Your cart is emprty... get some pizza!</p>}
      
      <Divider />
        <p className={classes.total}>subtotal: {total.toFixed(2)}{usd ? '$' : '€'}</p>
        
        <Button className={classes.btn} onClick={close(false)}  color="secondary" variant="contained" disabled={total === 0 ? true : false} >
        <Link className={classes.btn} to="/order">
         checkout
         </Link>
        </Button>
        
    </div>
  </>)
}
