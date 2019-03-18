import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";

const initial = {
    player1: 0,
    player2: 0,
    player1Serving: true,
};

const incrementPlayer1 = (state) => {
    return { ...state, player1: state.player1 + 1 };
};

const incrementPlayer2 = (state) => {
    return { ...state, player2: state.player2 + 1 };
};
    
const server = (state) => {
    return ((state.player1 + state.player2) % 5 === 0) ? { ...state, player1Serving: state.player1Serving = !state.player1Serving } : state;
}

const reducer = (state, action) => {
    switch (action.type) {
        case "incrementPlayer1": return server(incrementPlayer1(state));
        case "incrementPlayer2": return server(incrementPlayer2(state));
        case "reset": return initial;
        default: return state;
    }
};

const store = createStore(
    reducer,
    initial,
    window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const render = () => {
    let state = store.getState();
    // pass in state.value as a value prop
    ReactDOM.render(
        <App 
            player1={ state.player1 } 
            player2={ state.player2 } 
            player1Serving={ state.player1Serving }   
            handlePlayer1Increment={ () => store.dispatch({ type: "incrementPlayer1" }) } 
            handlePlayer2Increment={ () => store.dispatch({ type: "incrementPlayer2" }) } 
            handleReset={ () => store.dispatch({ type: "reset" }) } 
        />,
        document.getElementById("root")
    );
};
store.subscribe(render); // render when state changes
render(); // render when page loads using initial state
