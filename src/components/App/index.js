import { connect } from "react-redux";
import App from "./App";

const mapStateToProps = state => {
  return {
    settingsCompleted: state.settingsCompleted,
  };
};


export default connect(mapStateToProps)(App);