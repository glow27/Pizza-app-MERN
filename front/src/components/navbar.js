import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Button } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HistoryIcon from '@material-ui/icons/History';
import Cart from './cart';
import Currency from './currency';
import LogoutBtn from './logoutBtn';
import { useSelector } from 'react-redux';
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
    zIndex: 100,
  },
  btn: {
    height: '100%',
    width: '6rem',
  },
  logo: {
    margin: '0 2rem',
  },
});

export default function NavDrawer() {
  const classes = useStyles();
  const [cartOpen, setCartOpen] = useState(false);
  const history = useHistory();
  const cart = useSelector((state) => state.cart.list);
  const usd = useSelector((state) => state.cart.usd);
  const auth = useSelector(state => state.user.auth);
  const total = cart.reduce((a, b) => a + b.qty * b.price, 0);

  const toggleDrawer = (open) => (event) => {
    setCartOpen(open);
  };

  return (
    <div className={classes.navbar}>
      <Button
        onClick={() => {
          history.push('/');
        }}
      >
        <h2 className={classes.logo}>Super Pizza</h2>
      </Button>
      <div>
        <Currency />
        <Button className={classes.btn} onClick={toggleDrawer(true)}>
          <ShoppingCartOutlinedIcon />({total.toFixed(2)}
          {usd ? '$' : '€'})
        </Button>
        <Drawer open={cartOpen} onClose={toggleDrawer(false)}>
          <Cart close={toggleDrawer} />
        </Drawer>
        {auth ? (<><Button
          onClick={() => {
            history.push('/history');
          }}
          className={classes.btn}
        >
          <HistoryIcon />
        </Button><LogoutBtn/>
        </>) : <Button
          onClick={() => {
            history.push('/auth');
          }}
          className={classes.btn}
        >
          <AccountCircleOutlinedIcon />
        </Button>}
        
        
      </div>
    </div>
  );
}
