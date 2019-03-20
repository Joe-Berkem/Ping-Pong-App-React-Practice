import { connect } from "react-redux";
import Player from "./Player";

const mapStateToProps = state => {
    return {
        score: state.player2,
        player1Serving: !state.player1Serving,
        winner: state.winner,
        history: state.history,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handlePlayerIncrement: () => dispatch({ type: "incrementPlayer2" }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
