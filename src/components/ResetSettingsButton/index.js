import { connect } from "react-redux";
import ResetSettingsButton from "./ResetSettingsButton";
import { resetSettings } from "../../data/actions";

const mapDispatchToProps = dispatch => {
    return {
        handleReset: () => dispatch(resetSettings()),
    };
};

export default connect(null, mapDispatchToProps)(ResetSettingsButton);
