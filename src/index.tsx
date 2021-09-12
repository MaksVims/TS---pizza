import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.scss'
import App from './components/App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { store } from './core/store';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


