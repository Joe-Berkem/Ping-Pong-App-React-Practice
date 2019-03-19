import React from 'react';
import Header from './Header';
import Player from './Player';
import DisplayWinner from './DisplayWinner';
import ResetButton from './ResetButton';
import GameLog from './GameLog';

const App = ({
  player1, 
  player2, 
  player1Serving,
  handlePlayer1Increment, 
  handlePlayer2Increment,
  handleReset,
  winner,
  history
}) => (

  <React.Fragment>
      <Header/>

      <div className="row">
          <Player
            playerServing={ player1Serving }
            score={ player1 }
            winner= { winner }
            handlePlayerIncrement={ handlePlayer1Increment }
            name="Player 1"
          />

          <Player
            playerServing={ !player1Serving }
            score={ player2 }
            winner= { winner }
            handlePlayerIncrement={ handlePlayer2Increment }
            name="Player 2"
          />
      </div>

      <DisplayWinner winner={ winner} />
      <hr />

      <ResetButton
        handleReset={ handleReset }
      />

      <GameLog 
        history={ history } 
      />
  </React.Fragment>
);
export default App;
