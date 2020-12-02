import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from './input';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { makeOrder } from '../../redux/actionCreator';
import { useHistory } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import { Button, Grid, Typography, Modal } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

const schema = yup.object().shape({
  fName: yup.string().required('required'),
  lName: yup.string(),
  email: yup.string().email('wrong format').required('email is required'),
  phone: yup
    .string()
    .length(11, '(11 digits)')
    .matches(/[0-9]/, '(11 digits)')
    .required('phone is required'),
  address: yup.string().required('address is required'),
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(1),
    marginBottom: '10vh',
    alignItems: 'center',
  },
  btn: {
    width: '30vw',
    marginTop: '1rem',
  },
  modal: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    paddingTop: '50px',
  },
}));

export const OrderForm = () => {
  const styles = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.list);
  const user = useSelector((state) => state.user);
  const usd = useSelector((state) => state.cart.usd);
  const { register, errors, handleSubmit, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { isValid } = formState;

  const onSubmit = async (data) => {
    if (!user.auth) return setOpen(true);

    const respons = await fetch('/orders/add', {
      method: 'POST',
      body: JSON.stringify([...cart, usd]),
      headers: { 'Content-type': 'Application/json' },
    });

    if (respons.status === 200) {
      return setOpen(true);
    }
  };

  const handleOrder = () => {
    dispatch(makeOrder());
    history.push('/');
  };

  return (
    <>
      <form
        noValidate
        className={styles.root}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography component="h1" variant="h5" className={styles.header}>
          Delivery details
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="fName"
              defaultValue={user ? user.name : null}
              type="text"
              label="Fisrt Name"
              name="fName"
              error={!!errors.fName}
              helperText={errors?.fName?.message}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="lName"
              defaultValue={user ? user.lastName : null}
              type="text"
              label="Last Name"
              name="lName"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="phone"
              type="tel"
              label="Phone number"
              defaultValue={user ? user.phone : null}
              name="phone"
              error={!!errors.phone}
              helperText={errors?.phone?.message}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="email"
              type="email"
              defaultValue={user ? user.email : null}
              label="Email"
              name="email"
              error={!!errors.email}
              helperText={errors?.email?.message}
              required
            />
          </Grid>
          <Input
            ref={register}
            id="address"
            type="text"
            label="Address"
            defaultValue={user ? user.address : null}
            name="address"
            error={!!errors.address}
            helperText={errors?.address?.message}
            required
          />
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={styles.btn}
          disabled={cart.length && isValid ? false : true}
        >
          Place Order
        </Button>
      </form>
      {/* <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={2000}
        onClose={onSubmit}
      >
        <Alert onClose={onSubmit} severity="success">
          YOUR ORDER HAS BEEN RECEIVED!
        </Alert>
      </Snackbar> */}
      <Modal className={styles.modal} open={open} onClick={handleOrder}>
        <Alert severity="info">YOUR ORDER HAS BEEN RECEIVED!</Alert>
      </Modal>
    </>
  );
};
