import React from 'react';
import MissedCallIcon from '../../../static/svg/missed-call.svg';
import AnsweredCallIcon from '../../../static/svg/answered-call.svg';
import { missedCallTypes } from '../../../helpers/constants';

const CallTypeIcon = ({ call_type }) => {
    let selectedIcon = missedCallTypes.includes(call_type) ? <MissedCallIcon /> : <AnsweredCallIcon />;

    return <div className="call-type-icon">{selectedIcon}</div>;
}

export default CallTypeIcon;
