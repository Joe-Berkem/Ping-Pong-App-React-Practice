import React, { Component } from "react";

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
        p1Name: "",
        p2Name: "",
        winningScore: 21,
        alternateEvery: 5,
    };

    this.handleChangeP1Name = this.handleChangeP1Name.bind(this);
    this.handleChangeP2Name = this.handleChangeP2Name.bind(this);
    this.handleChangeWinningScore = this.handleChangeWinningScore.bind(this);
    this.handleChangeAlternateEvery = this.handleChangeAlternateEvery.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeP1Name(e) {
    this.setState({ p1Name: e.currentTarget.value });
  }

  handleChangeP2Name(e) {
    this.setState({ p2Name: e.currentTarget.value });
  }

  handleChangeWinningScore(e) {
    this.setState({ winningScore: e.currentTarget.value });
  }

  handleChangeAlternateEvery(e) {
    this.setState({ alternateEvery: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitSettings(this.state);
  }

  render() {
    let { p1Name, p2Name, winningScore, alternateEvery } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <div className="form-group">
          <label>Player 1 Name</label>
          <input
            className="form-control"
            onChange={ this.handleChangeP1Name }
            value={ p1Name }
            type="text"
          />
          <label>Player 2 Name</label>
          <input
            className="form-control"
            onChange={ this.handleChangeP2Name }
            value={ p2Name }
            type="text"
          />
          <label>Winning Score</label>
          <input
            className="form-control"
            onChange={ this.handleChangeWinningScore }
            value={ winningScore }
            type="number"
          />
          <label>Alternate Every</label>
          <input
            className="form-control"
            onChange={ this.handleChangeAlternateEvery }
            value={ alternateEvery }
            type="number"
          />
        </div>
        <button className="btn btn-primary">Start Game</button>
      </form>
    );
  }
}

export default Settings;