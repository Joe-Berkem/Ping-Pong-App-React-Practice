import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";

const initial = {
    player1: 0,
    player2: 0,
    player1Serving: true,
    winner: 0,
    history: [],
};

const incrementPlayer1 = (state) => {
    return { ...state, player1: state.player1 + 1 };
};

const incrementPlayer2 = (state) => {
    return { ...state, player2: state.player2 + 1 };
};
    
const server = (state) => {
    return ((state.player1 + state.player2) % 5 === 0) ? { ...state, player1Serving: state.player1Serving = !state.player1Serving } : state;
};

const tieBreak = (state) => {
    return ((state.player1 >= 21) && (state.player1 + state.player2) % 2 === 0) ? { ...state, player1Serving: state.player1Serving = !state.player1Serving } : state;
};

const winnerPlayer1 = (state) => {
    return state.player1 >= 21 && (state.player1 - state.player2) > 1  ? {...state, winner: state.winner = 1} : state;
}

const winnerPlayer2 = (state) => {
    return state.player2 >= 21  && (state.player2 - state.player1) > 1 ? {...state, winner: state.winner = 2} : state;
}

const addToHistory = (state) => {
    return state.winner === 1 || state.winner === 2 ?{...state, history: [...state.history, `Player 1 = ${state.player1} | Player 2 = ${state.player2}`]} : state;
    }

const reducer = (state, action) => {
    switch (action.type) {
        case "incrementPlayer1": return addToHistory(winnerPlayer1(tieBreak(server(incrementPlayer1(state)))));
        case "incrementPlayer2": return addToHistory(winnerPlayer2(tieBreak(server(incrementPlayer2(state)))));
        case "reset": return {...state, player1: 0,
                                        player2: 0,
                                        player1Serving: true,
                                        winner:0}
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
            winner={ state.winner }  
            history={ state.history }  
            handlePlayer1Increment={ () => store.dispatch({ type: "incrementPlayer1" }) } 
            handlePlayer2Increment={ () => store.dispatch({ type: "incrementPlayer2" }) } 
            handleReset={ () => store.dispatch({ type: "reset" }) } 
        />,
        document.getElementById("root")
    );
};
store.subscribe(render); // render when state changes
render(); // render when page loads using initial state
