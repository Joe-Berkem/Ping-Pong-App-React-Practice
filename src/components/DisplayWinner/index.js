import { connect } from "react-redux";
import DisplayWinner from "./DisplayWinner";

const mapStateToProps = state => {
    return {
        winner: state.winner,
        p1Name: state.p1Name,
        p2Name: state.p2Name,
    };
};

export default connect(mapStateToProps)(DisplayWinner);