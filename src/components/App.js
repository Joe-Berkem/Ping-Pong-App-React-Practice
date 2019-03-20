import React from 'react';
import Header from './Header/Header';
import DisplayWinner from './DisplayWinner';
import ResetButton from './ResetButton';
import GameLog from './GameLog';
import Player1 from './Player/Player1';
import Player2 from './Player/Player2';

const App = ({
}) => (

  <React.Fragment>
    
      <Header/>

      <div className="row">
          <Player1
            name="Player 1"
          />

          <Player2
            name="Player 2"
          />
      </div>

      <DisplayWinner />
      <hr />

      <ResetButton/>

      <GameLog />

  </React.Fragment>
);
export default App;
