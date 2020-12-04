import React from 'react';
import Pizza from './pizza';
import { makeStyles } from '@material-ui/core/styles';
import chicken from '../assets/BuffaloChicken.jpg';
import cheese from '../assets/LowGlutenCheese.jpg';
import dPepp from '../assets/TheMeats.jpg';
import hawaiian from '../assets/Hawaiian.jpg';
import margherita from '../assets/Supreme.jpg';
import mexican from '../assets/Mexican.jpg';
import meatFest from '../assets/TheMeats.jpg';
import pepperoni from '../assets/Sausage.jpg';
import vegan from '../assets/VeganVeggie.jpg';

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

/**main page */
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
