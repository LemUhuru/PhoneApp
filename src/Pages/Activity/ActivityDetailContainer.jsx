import { connect } from 'react-redux';
import { updateActivity, getActivities } from '../../modules/Activity/operations';
import ActivityDetail from './ActivityDetail.jsx';


const mapStateToProps = ({ activity }) => {
    const { updateActivityPending, activities } = activity;

    return {
        activities,
        updateActivityPending,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateActivity: activityId => dispatch(updateActivity(activityId)),
        getActivities: () => dispatch(getActivities()),
    };
};


export default connect(
    mapStateToProps, 
    mapDispatchToProps)(ActivityDetail);
