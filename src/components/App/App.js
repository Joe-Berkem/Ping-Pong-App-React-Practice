import React from 'react';
import Header from '../Header/Header.js';
import DisplayWinner from '../DisplayWinner';
import ResetButton from '../ResetButton';
import GameLog from '../GameLog';
import Player1 from '../Player/Player1';
import Player2 from '../Player/Player2';
import Settings from '../Settings/';
import ResetSettingsButton from '../ResetSettingsButton';

const App = ( {settingsCompleted} ) => (

  <React.Fragment>
    
      <Header/>

      { settingsCompleted ?
      <React.Fragment>
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
        <ResetSettingsButton/>

        <GameLog />
      </React.Fragment>
      
      : <Settings /> 
      }

  </React.Fragment>
);
export default App;
