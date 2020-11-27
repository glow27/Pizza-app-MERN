import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Cart from './cart';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles({
  list: {
    width: '30vw',
  },
  navbar: {
    backgroundColor: 'rgb(255, 225, 89)',
    height: '10vh',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 2%',
    marginBottom: '1rem',
  },
  btn: {
    height: '100%',
  },
  radio: {
    verticalAlign: 'middle'
  }
});

export default function NavDrawer() {
  const classes = useStyles();
  const [cartOpen, setCartOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setCartOpen(open);
  };

  

  return (
    <div className={classes.navbar}>
      <h2>Super Pizza</h2>
      <div>

      <FormControl className={classes.radio}>
      <RadioGroup row aria-label="position" name="position" defaultValue="usd">
      <FormControlLabel value="usd" control={<Radio color="default" />} label="usd" />
      <FormControlLabel value="eur" control={<Radio color="default" />} label="eur" />
      </RadioGroup>
      </FormControl>

        <Button className={classes.btn} onClick={toggleDrawer(true)}>
          <ShoppingCartOutlinedIcon />
          {`(0)`}
        </Button>
        <Drawer open={cartOpen} onClose={toggleDrawer(false)}>
          <Cart/>
        </Drawer>
        <Button className={classes.btn}>
          <AccountCircleOutlinedIcon />
        </Button>
      </div>
    </div>
  );
}
