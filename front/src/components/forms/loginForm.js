import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from './input';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import { Grid, Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actionCreator';

const schema = yup.object().shape({
  email: yup.string().email('wrong format').required('email is required'),
  password: yup
    .string()
    .min(6, 'at least 6 characters')
    .max(12, 'input is too long')
    .required('email is required'),
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  btn: {
    margin: '2rem 0',
    width: '40%',
  },
  flash: {
    color: 'red',
  },
}));

export const LoginForm = () => {
  const styles = useStyles();
  const [flash, setFlash] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { register, errors, handleSubmit, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { isValid } = formState;

  const onSubmit = async (data) => {
    const { email, password } = data;

    const respons = await fetch('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-type': 'Application/json' },
    });
    if (respons.ok) {
      const user = await respons.json();
      dispatch(loginUser(user));
      return history.push('/');
    }
    return setFlash(true);
  };

  return (
    <>
      <form
        noValidate
        className={styles.root}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Grid container spacing={1}>
          <Input
            ref={register}
            id="email"
            type="email"
            label="Email"
            name="email"
            error={!!errors.email}
            helperText={errors?.email?.message}
            required
            onFocus={() => setFlash(false)}
          />
          <Input
            ref={register}
            id="password"
            type="password"
            label="Password"
            name="password"
            error={!!errors.password}
            helperText={errors?.password?.message}
            required
            onFocus={() => setFlash(false)}
          />
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.btn}
          disabled={isValid ? false : true}
        >
          Login
        </Button>
        {flash ? (
          <p className={styles.flash}>Invalid email or password!</p>
        ) : null}
      </form>
    </>
  );
};
