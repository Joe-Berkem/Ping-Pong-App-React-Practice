import React from 'react';

const DisplayWinner = ({ winner, p1Name, p2Name }) => winner === 0 ? null : ( 

       <h2 className="jumbotron dark-text App">{winner === 1 ? p1Name : p2Name} wins!</h2>
);

export default DisplayWinner;