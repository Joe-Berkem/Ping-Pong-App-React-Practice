import React from 'react';

const Player = ({ 
    player1Serving, 
    score, 
    winner,
    handlePlayerIncrement, 
    name 
}) => (

    <div className="col-xs-6">
        <p>{name} {player1Serving &&
            <span className="pull-right label label-primary">Serving</span>
            }
        </p> 
        
        <p className="well dark-text">{ score }</p>

        {winner === 0 ? 
        <button 
        onClick={handlePlayerIncrement} 
        className="btn btn-primary"
        >+
        </button> : null}
    </div>
)

export default Player;