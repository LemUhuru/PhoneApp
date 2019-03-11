import React from 'react';
import ArchiveIcon from '../../static/svg/archive-icon.svg';

const ActivityArchiveButton = ({ archiveAll, handleArchiveClick }) => {
    return (<button onClick={handleArchiveClick} className="activity-archive-button">
                <ArchiveIcon width={20} /> 
                <span className="activity-archive-text">
                    {archiveAll ? "Archive all calls" : "Archive Call"}
                </span>
            </button>)
};

export default ActivityArchiveButton;