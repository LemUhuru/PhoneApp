import { connect } from 'react-redux';
import { getActivities, updateActivities, updateActivity, resetActivities } from '../../modules/Activity/operations';

import ActivityFeed from './ActivityFeed.jsx';


const mapStateToProps = ({ activity }) => {
    const { activities, isPending, updateActivitiesPending } = activity;
    return {
        activities,
        updateActivitiesPending,
        isPending,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getActivities: () => dispatch(getActivities()),
        updateActivities: activityIds => dispatch(updateActivities(activityIds)),
        resetActivities: () => dispatch(resetActivities()),
    };
};


export default connect(
    mapStateToProps, 
    mapDispatchToProps)(ActivityFeed);
