import { setCurrentLocation } from "../../actions/shared";
import { connect } from "react-redux";
import Home from "../../components/home/Home.component";

const mapDispatchToProps = dispatch => ({
  setCurrentLocation: (location) => dispatch(setCurrentLocation(location)),
});

export default connect(null, mapDispatchToProps)(Home);
