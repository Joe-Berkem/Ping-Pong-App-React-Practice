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

const render = () => {
    let state = store.getState();

    ReactDOM.render(
        <Provider store={ store }>
            <App 
                handlePlayer1Increment={ () => store.dispatch({ type: "incrementPlayer1" }) } 
                handlePlayer2Increment={ () => store.dispatch({ type: "incrementPlayer2" }) } 
                handleReset={ () => store.dispatch({ type: "reset" }) } 
            />
        </Provider>,
        document.getElementById("root")
    );
};
store.subscribe(render);
render();
