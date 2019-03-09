import React from 'react';
import ActivityDivider from './ActivityDivider.jsx';
import ActivityDetailButton from './ActivityDetailButton.jsx';

const Activity = ({ activity }) => {

    return (
        <div className="activity">
            <ActivityDivider created_at={activity.created_at} />
            <ActivityDetailButton {...activity} />
        </div>
    )
};

export default Activity;