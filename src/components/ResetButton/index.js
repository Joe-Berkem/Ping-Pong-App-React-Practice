import { connect } from "react-redux";
import ResetButton from "./ResetButton";

const mapDispatchToProps = dispatch => {
    return {
        handleReset: () => dispatch({ type: "reset" }),
    };
};

export default connect(null, mapDispatchToProps)(ResetButton);
