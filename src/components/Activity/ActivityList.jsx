import React from 'react';
import Activity from './Activity.jsx';


const ActivityList = ({ activeList, history }) => {
    const handleActivityClick = event => {
        const { id } = event.target;
        history.push(`/${id}`);
    }

    const activityList = activeList.length > 0 && activeList.map(activity => {
        const { id } = activity;

        return <li key={id} id={`${id}`}><Activity activity={activity} /></li>
    });


    return (
        <div className="activity-list">
            <ul onClick={handleActivityClick}>
                {activityList.length > 0 ? activityList : "You don't have activities."}
            </ul>
        </div>
    )
}


export default ActivityList;