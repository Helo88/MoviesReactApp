import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Provider } from "react-redux";
// store itself
import store from './store/index'
import './il8n'
// Amust for translation Package to work
import  { Suspense } from 'react';


ReactDOM.render(
  <Suspense fallback={(<div>Loading</div>)}>
  <Provider store={store}>
    <App />
  </Provider>,
  </Suspense>,
  document.getElementById('root')
);


