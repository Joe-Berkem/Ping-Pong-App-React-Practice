import { connect } from "react-redux";
import GameLog from "./GameLog";

const mapStateToProps = state => {
    return {
        history: state.history
    };
};

export default connect(mapStateToProps)(GameLog);