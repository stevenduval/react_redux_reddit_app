import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import { Home } from '../features/Home/Home';
import { Nav } from '../features/Nav/Nav';

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path='/' element={<> <Nav /><Home /> </>} />
          </Routes>
      </Router>
    </Provider>
  );
}