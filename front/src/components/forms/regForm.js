import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Input } from './input';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  FormHelperText,
  Button,
  Typography,
} from '@material-ui/core';

const schema = yup.object().shape({
  fName: yup
    .string()
    .min(2, 'input is too short')
    .max(12, 'input is too long')
    .required('required'),
  lName: yup
    .string()
    .min(2, 'input is too short')
    .max(16, 'input is too long')
    .required('required'),
  email: yup.string().email('wrong format').required('email is required'),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email'), null], 'emails must match'),
  phone: yup
    .string()
    .length(11, 'wrong format')
    .matches(/[0-9]/, 'wrong format')
    .required('phone is required'),
  password: yup
    .string()
    .min(6, 'at least 6 characters')
    .max(12, 'input is too long')
    .required('email is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'passwords must match'),
  confirmation: yup
    .bool()
    .required('The terms and conditions must be accepted.')
    .oneOf([true], 'Field must be checked'),
  address: yup
    .string()
    .min(6, 'address is too short')
    .max(50, 'input is too long')
    .required('address is required'),
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
  },
  confirmationCheckbox: {
    marginTop: '10px',
  },
  btn: {
    margin: '2rem 0',
  },
}));

export const RegForm = ({ success }) => {
  const styles = useStyles();
  const { register, errors, handleSubmit, formState } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const { isValid } = formState;

  const onSubmit = (data) => {
    success(0);
  };

  return (
    <>
      <form
        noValidate
        className={styles.root}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="fName"
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
              type="text"
              label="Last Name"
              name="lName"
              error={!!errors.lName}
              helperText={errors?.lName?.message}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="email"
              type="email"
              label="Email"
              name="email"
              error={!!errors.email}
              helperText={errors?.email?.message}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="confirmEmail"
              type="email"
              label="Confirm Email"
              name="confirmEmail"
              error={!!errors.confirmEmail}
              helperText={errors?.confirmEmail?.message}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="password"
              type="password"
              label="Password"
              name="password"
              error={!!errors.password}
              helperText={errors?.password?.message}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="confirmPassword"
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              error={!!errors.confirmPassword}
              helperText={errors?.confirmPassword?.message}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              ref={register}
              id="phone"
              type="tel"
              label="Phone number"
              name="phone"
              error={!!errors.phone}
              helperText={errors?.phone?.message}
              required
            />
          </Grid>
          <Input
            ref={register}
            id="address"
            type="text"
            label="Address"
            name="address"
            error={!!errors.address}
            helperText={errors?.address?.message}
            required
          />
        </Grid>
        <FormControlLabel
          control={
            <Checkbox
              name="confirmation"
              variant="confirmation"
              inputRef={register}
              color="primary"
              error={!!errors.confirmation}
              helperText={errors?.confirmation?.message}
            />
          }
          label={
            <Typography>
              I agree to the Terms of Service and Privacy Policy.
            </Typography>
          }
        ></FormControlLabel>
        <FormHelperText>
          <Typography color="secondary">
            {errors?.confirmation?.message}
          </Typography>
        </FormHelperText>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={styles.btn}
          disabled={isValid ? false : true}
        >
          Register
        </Button>
      </form>
    </>
  );
};
