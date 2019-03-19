import React from 'react';

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

const reducers = (state, action) => {
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

export default reducers;