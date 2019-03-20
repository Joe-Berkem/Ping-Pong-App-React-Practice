import { connect } from "react-redux";
import Player from "./Player";
import { handlePlayer1Increment } from "../../data/actions";


const mapStateToProps = state => {
    return {
        score: state.player1,
        player1Serving: state.player1Serving,
        winner: state.winner,
        history: state.history
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handlePlayerIncrement: () => dispatch(handlePlayer1Increment()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);