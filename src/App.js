import React from 'react';
import './App.css';

const App = ({
  player1, 
  player2, 
  player1Serving,
  handlePlayer1Increment, 
  handlePlayer2Increment,
  handleReset
}) => (

  <React.Fragment>
      {/* header */}
      <header className="page-header">
          <h1>PongPing</h1>
      </header>

      {/* scores */}
      <div className="row">
          <div className="col-xs-6">
              <p>Player 1 {player1Serving &&
                 <span className="pull-right label label-success">Serving</span>}
              </p> 
              
              <p className="well">{ player1 }</p>
              <button 
                onClick={handlePlayer1Increment} 
                className="btn btn-primary"
              >+
              </button>
          </div>

          <div className="col-xs-6">
              <p>Player 2 {!player1Serving &&
                <span className="pull-right label label-success">Serving</span>}
              </p>
              
              <p className="well">{ player2 }</p>
              <button 
                onClick={handlePlayer2Increment} 
                className="btn btn-primary"
              >+
              </button>
          </div>
      </div>

      { /* winner message */}
      <h2 className="jumbotron">Player {/* winning player here */} wins!</h2>

      <hr />

      { /* reset button */}
      <button 
        className="btn btn-danger"
        onClick={handleReset}
      >Reset</button>
  </React.Fragment>
);
export default App;
