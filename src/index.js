import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/';
import './index.css';
import { createStore } from "redux";
import { Provider } from "react-redux";
import initial from "./data/initial";
import reducers from "./data/reducers";


const store = createStore(
    reducers,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


ReactDOM.render(
    <Provider store={ store }>
       
        <body>
            <App />
        </body>
        
    </Provider>,
    document.getElementById("root")
);
