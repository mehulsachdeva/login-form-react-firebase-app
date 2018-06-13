import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signin from './Signin';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

//********** Enter firebase config object here **************

firebase.initializeApp(config);

ReactDOM.render(<Signin />, document.getElementById('root'));
registerServiceWorker();
