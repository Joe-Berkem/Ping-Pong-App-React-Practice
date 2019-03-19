import React from 'react';
import Header from './Header/Header';
import DisplayWinner from './DisplayWinner';
import ResetButton from './ResetButton/ResetButton';
import GameLog from './GameLog';
import Player1 from './Player/Player1';
import Player2 from './Player/Player2';

const App = ({
  handlePlayer1Increment, 
  handlePlayer2Increment,
  handleReset,
}) => (

  <React.Fragment>
    
      <Header/>

      <div className="row">
          <Player1
            handlePlayerIncrement={ handlePlayer1Increment }
            name="Player 1"
          />

          <Player2
            handlePlayerIncrement={ handlePlayer2Increment }
            name="Player 2"
          />
      </div>

      <DisplayWinner />
      <hr />

      <ResetButton
        handleReset={ handleReset }
      />
      <GameLog />

  </React.Fragment>
);
export default App;
