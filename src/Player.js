import React from 'react';
import './App.css';

const Player = ({ 
    playerServing, 
    score, 
    winner,
    handlePlayerIncrement, 
    name 
}) => (

    <div className="col-xs-6">
        <p>{name} {playerServing &&
            <span className="pull-right label label-success">Serving</span>
            }
        </p> 
        
        <p className="well">{ score }</p>

        {winner !== 1 && winner !== 2 ? 
        <button 
        onClick={handlePlayerIncrement} 
        className="btn btn-primary"
        >+
        </button> : null}
    </div>
)

export default Player;