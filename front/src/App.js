import NavDrawer from './components/navbar';
import Display from './components/display';
import Auth from './components/auth';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Order from './components/order';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavDrawer />
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <PrivateRoute path="/history"></PrivateRoute>
            <Route path="/order">
              <Order />
            </Route>
            <Route path="/">
              <Display />
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
