import { connect } from "react-redux";
import Settings from "./Settings";
import { submit } from "../../data/actions";

const mapStateToProps = state => {
  return {
    p1Name: state.p1Name,
    p2Name: state.p1Name,
    winningScore: state.winningScore,
    alternateEvery: state.alternateEvery,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        submitSettings: (state) => dispatch(submit(state)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);