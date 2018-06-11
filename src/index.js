import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD7Y2oLIXZFHgdGZHT8Wzq31_qRFH_Tejw",
    authDomain: "test-react-app-58566.firebaseapp.com",
    databaseURL: "https://test-react-app-58566.firebaseio.com",
    projectId: "test-react-app-58566",
    storageBucket: "test-react-app-58566.appspot.com",
    messagingSenderId: "304819993239"
  };
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
