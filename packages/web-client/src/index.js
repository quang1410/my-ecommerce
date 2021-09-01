import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

import Layout from './components/Layout';
import store from './Store/index'

import './sass/index.scss'

ReactDOM.render(
  <Provider store={store}>
    <Layout/>
  </Provider>
  ,
  document.getElementById('root')
);


