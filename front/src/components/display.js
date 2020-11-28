import React from 'react';
import Pizza from './pizza';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'center',
   marginBottom: '2rem',
   paddingTop: '11vh'
  },
});





export default function Display() {
  const classes = useStyles();
  const pizzas = useSelector(state => state.pizza.list)
  const state = useSelector(state => state)
  console.log(state);

  return (
    <div className={classes.root}>
      {pizzas.map((el, i) => (
        <Pizza key={i} pizza={el} />
      ))}
    </div>
  );
}
