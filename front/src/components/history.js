import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { logoutUser } from '../redux/actionCreator';
import { Card, Divider, Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: '2rem',
    paddingTop: '11vh',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: theme.spacing(1),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
}));

/**a card of an order from history */
function SimpleCard({ info }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        {info.slice(0, info.length - 1).map((el, i) => (
          <Typography key={i} variant="body2" component="p">
            {bull}
            {el.title}, <b>qty</b> {el.qty}
          </Typography>
        ))}
      </CardContent>
      <Divider />
      <CardActions>
        <Typography className={classes.total} variant="h5" component="h2">
          total:{' '}
          {info
            .slice(0, info.length - 1)
            .reduce((a, b) => a + b.price * b.qty, 5)
            .toFixed(2)}{' '}
          {info[info.length - 1] ? '$' : '€'}
        </Typography>
      </CardActions>
    </Card>
  );
}

/**orders history page */
export default function History() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      const respons = await fetch('/orders/history');
      if (respons.status === 200) {
        const result = await respons.json();

        return setOrders(result);
      }

      dispatch(logoutUser());
      history.push('/auth');
    })();
  }, [history, dispatch]);

  return (
    <div className={classes.root}>
      {orders.map((el, i) => (
        <SimpleCard info={el} key={i} />
      ))}
    </div>
  );
}
