import { connect } from "react-redux";
import DisplayWinner from "./DisplayWinner";

const mapStateToProps = state => {
    return {
        winner: state.winner
    };
};

export default connect(mapStateToProps)(DisplayWinner);