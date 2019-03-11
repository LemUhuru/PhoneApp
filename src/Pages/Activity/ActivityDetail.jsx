import React, { Component } from 'react';
import BackButton from '../../components/Common/Input/BackButton.jsx';
import ActivityArchiveButton from '../../components/Activity/ActivityArchiveButton.jsx';
import Loader from '../../components/Common/Loader.jsx';
import { getActivityById } from '../../helpers/activity'


class ActivityDetail extends Component {
     handleArchiveClick = () => {
        const { updateActivity, getActivities, match: { params } } = this.props;
        const { id } = params;

            updateActivity(id)
            .then(getActivities)
    }

    render() {
        const { history: { goBack }, updateActivityPending, activities, match: { params: { id }} } = this.props;
        const activity = getActivityById(id, activities);
        const { created_at, is_archived, direction, from, to, via, duration, call_type } = activity || {};

        return (
            <section className="activity-detail-section">
                <nav className="home-nav"><BackButton goBack={goBack} /></nav>
                {updateActivityPending ? 
                    <Loader />
                    :
                    (<div className="activity-detail-body">
                        <ul>
                            <li>From: {from}</li>
                            <li>To: {to}</li>
                            <li>Created At: {created_at}</li>
                            <li>Direction: {direction}</li>
                            <li>Via: {via}</li>
                            <li>Duration: {duration} minutes</li>
                            <li>Archived: {is_archived ? "True":"False"}</li>
                            <li>Call Type: {call_type }</li>
                        </ul>
                        {!is_archived && <ActivityArchiveButton  handleArchiveClick={this.handleArchiveClick} />}
                    </div>)
                }
            </section>
        );
    }
}


export default ActivityDetail;