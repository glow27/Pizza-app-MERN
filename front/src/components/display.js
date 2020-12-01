import React from 'react';
import Pizza from './pizza';
import { makeStyles } from '@material-ui/core/styles';
import chicken from '../assets/chicken-bbq.jpg';
import cheese from '../assets/cheese.jpg';
import dPepp from '../assets/double-pepperoni.jpg';
import hawaiian from '../assets/hawaiian.jpg';
import margherita from '../assets/margherita.jpeg';
import mexican from '../assets/mexican.jpg';
import meatFest from '../assets/meat-fest.jpg';
import pepperoni from '../assets/pepperoni.jpg';
import vegan from '../assets/vegan-veggie.jpeg';

const pizzas = [
  { img: cheese, title: 'Cheese', price: 6 },
  { img: chicken, title: 'Chicken-BBQ', price: 8 },
  { img: dPepp, title: 'Double Pepperoni', price: 7.5 },
  { img: hawaiian, title: 'Hawaiian', price: 6.25 },
  { img: margherita, title: 'Margherita', price: 6 },
  { img: mexican, title: 'Mexican', price: 7 },
  { img: meatFest, title: 'Meat-fest', price: 9 },
  { img: pepperoni, title: 'Pepperoni', price: 5 },
  { img: vegan, title: 'Vegan', price: 5 },
];

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '2rem',
    paddingTop: '11vh',
  },
});

export default function Display() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {pizzas.map((el, i) => (
        <Pizza key={i} pizza={el} />
      ))}
    </div>
  );
}
