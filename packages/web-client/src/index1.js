import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"

import store from './Store/index'
import Layout from './Components/Layout/Layout';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'

document.title="Quang ĐN"

ReactDOM.render(
  <Provider store={store}>
    <Layout/>
  </Provider>
,
  document.getElementById('root')
);
