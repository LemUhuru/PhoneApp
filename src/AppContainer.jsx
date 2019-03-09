import { connect } from 'react-redux';
import { getActivities } from './modules/Activity/operations';
import { withRouter } from 'react-router-dom';
import App from './App.jsx';


const mapStateToProps = ({ activity: { activities } }) => {

    return {
        activities,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getActivities: () => dispatch(getActivities()),
    };
};


export default withRouter(connect(
    mapStateToProps, mapDispatchToProps)(App));
