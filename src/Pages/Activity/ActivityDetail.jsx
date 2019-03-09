import React from 'react';
import BackButton from '../../components/Common/Input/BackButton.jsx';
import ActivityArchiveButton from '../../components/Activity/ActivityArchiveButton.jsx';
import Loader from '../../components/Common/Loader.jsx';
import { getActivityById } from '../../helpers/activity'
import { Link } from 'react-router-dom';

const ActivityDetail = props => {
    const { match: { params }, updateActivity, getActivities, updateActivityPending, activities } = props;
    const { id } = params;
    const currentActivity = getActivityById(id, activities);
    const { created_at, direction, from, to, via, duration,  is_archived, call_type } = currentActivity;

    return (
        <section className="activity-detail-section">
            <Link to="/" className="home-nav"><BackButton /></Link>
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

                {!is_archived && <ActivityArchiveButton  
                    activities={activities} 
                    updateActivity={updateActivity}
                    getActivities={getActivities}
                    activityId={id}
                    />}
                </div>
                )
            }
            
        </section>
    );
}


export default ActivityDetail;