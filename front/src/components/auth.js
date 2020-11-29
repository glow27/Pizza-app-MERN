import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';
import {RegForm} from './forms/regForm';
import {LoginForm} from './forms/loginForm';
import Box from '@material-ui/core/Box';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
   display: 'flex',
   justifyContent: 'center',
   
   paddingTop: '11vh'
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    padding: '5vh 0'
   },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles()

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.box}>
          {children}
        </Box>
      )}
    </div>
  );
}



export default function Auth() {
  const [value, setValue] = useState(0);
  const classes = useStyles()

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (<>
    <Paper className={classes.root}>
      <Tabs
      
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="LOGIN"/>
          
        <Tab label="Registration" />
      </Tabs>
      
    </Paper>
    <Container>
    <TabPanel value={value} index={0}>
    <LoginForm/>
  </TabPanel>
  <TabPanel value={value} index={1}>
  <RegForm success={setValue}/>
  </TabPanel>
  </Container>
  </> );
}
