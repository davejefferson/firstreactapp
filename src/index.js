import React from 'react';
import ReactDOM from 'react-dom';

// import provider to send store to containers, import connect to access the store in containers 
import {Provider} from "react-redux";

import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import './index.css';
import App from "./containers/App";
import registerServiceWorker from './registerServiceWorker';
import {searchRobots} from "./reducers";
import "tachyons";

const logger= createLogger();

// Create Store for redux
const store = createStore(searchRobots, applyMiddleware(logger));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
         
registerServiceWorker();
