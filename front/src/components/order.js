import React from 'react';
import { Container, List, Divider, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { OrderForm } from './forms/orderForm';

const useStyles = makeStyles({
  root: {
    paddingTop: '11vh',
    textAlign: 'center',
  },
  item: {
    padding: '0 10vw',
    justifyContent: 'space-between',
  },
  price: {
    marginTop: 0,
  },
  total: {
    textAlign: 'right',
  },
});

export default function Order() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart.list);
  const usd = useSelector((state) => state.cart.usd);

  return (
    <>
      <Container className={classes.root}>
        <h2>Order details</h2>
        <List>
          {cart.map((el, index) => (
            <ListItem className={classes.item} key={index}>
              <h3 className={classes.price}>
                {index + 1}. {el.title}
              </h3>
              <h3 className={classes.price}>
                qty: {el.qty}, prcice: {(el.qty * el.price).toFixed(2)}{' '}
                {usd ? '$' : '€'}
              </h3>
            </ListItem>
          ))}
        </List>
        <Divider />
        <p>delivery: +5 {usd ? '$' : '€'}</p>
        <h2 className={classes.price}>
          total: {cart.reduce((a, b) => a + b.qty * b.price, 5).toFixed(2)}{' '}
          {usd ? '$' : '€'}
        </h2>
        <OrderForm />
      </Container>
    </>
  );
}
