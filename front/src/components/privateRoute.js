import React from 'react';
import { useSelector } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({children, ...rest}) {
  const auth = useSelector(state => state.user.auth)

  return <Route {...rest}>
   {auth ? children : <Redirect to='/auth'/>}
  </Route>
}

export default PrivateRoute;
