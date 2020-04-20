import { connect } from "react-redux";
import Navigation from "../../components/navigation/Navigation.component";

const mapStateToProps = state => ({
  currentLocation: state.sharedReducer.currentLocation,
});

export default connect(mapStateToProps)(Navigation);
