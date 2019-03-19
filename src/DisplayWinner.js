import React from 'react';

const DisplayWinner = ({ 
    winner,
}) => (

     winner !== 0 && 
      <h2 className="jumbotron">Player {winner === 1 ? 1 : 2} wins!</h2>
      
)

export default DisplayWinner;