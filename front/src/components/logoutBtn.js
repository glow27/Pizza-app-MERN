import React from 'react';
import { Button } from '@material-ui/core';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import {logoutUser} from '../redux/actionCreator';

const useStyles = makeStyles({
  btn: {
    height: '100%',
    width: '6rem',
  },
});

export default function LogoutBtn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = async () => {

    const respons = await fetch('/login/close', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-type': 'Application/json' },
      
    });
    dispatch(logoutUser());
  }

  return <Button
  onClick={() => {
    handleClick();
  }}
  className={classes.btn}
>
  <MeetingRoomOutlinedIcon />
</Button>
}
