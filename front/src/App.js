import './App.css';
import NavDrawer from './components/navbar';
import Display from './components/display';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
      <Provider store={store}>
        <NavDrawer />
        <Display />
      </Provider>
    </>
  );
}

export default App;
