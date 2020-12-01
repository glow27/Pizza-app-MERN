import React from 'react';
import { Button } from '@material-ui/core';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actionCreator';

const useStyles = makeStyles({
  btn: {
    height: '100%',
    width: '6rem',
  },
});

export default function LogoutBtn() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = async () => {
    await fetch('/auth/logout');
    dispatch(logoutUser());
  };

  return (
    <Button
      onClick={() => {
        handleClick();
      }}
      className={classes.btn}
    >
      <MeetingRoomOutlinedIcon />
    </Button>
  );
}
