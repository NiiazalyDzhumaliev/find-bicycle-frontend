import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import loginReducer from './reducers/login.reducer';
import signupReducer from './reducers/signup.reducer';
import favouritesReducer from './reducers/favourites.reducer';
import bicyclesReducer from './reducers/bicycles.reducer';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  bicycles: bicyclesReducer,
  favourites: favouritesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,

  document.getElementById('root'),
);
