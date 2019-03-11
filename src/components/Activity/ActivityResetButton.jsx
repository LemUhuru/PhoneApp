import React from 'react';
import ResetButton from '../../static/svg/reset-icon.svg';

const ActivityResetButton = ({ handleResetClick }) => {
    return (<button onClick={handleResetClick} className="activity-archive-button">
                <ResetButton width={20} /> 
                <span className="activity-archive-text">Reset all calls</span>
            </button>)
};

export default ActivityResetButton;