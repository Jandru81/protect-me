import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import config from './ config';
firebase.initializeApp(config.firebase);

ReactDOM.render(<App />, document.getElementById('root'));
