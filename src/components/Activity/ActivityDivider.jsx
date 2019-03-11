import React from 'react';
import { parseUTCDate, formatDate } from '../../helpers/date';

const ActivityDivider = ({ created_at }) => {
    const { month, day, year } = parseUTCDate(created_at);
    const formattedDate = formatDate(month, day, year).toUpperCase();
    
    return <div className="activity-divider"><span>{formattedDate}</span></div>
}

export default ActivityDivider;