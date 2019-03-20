import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
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

        <App />
        
    </Provider>,
    document.getElementById("root")
);
