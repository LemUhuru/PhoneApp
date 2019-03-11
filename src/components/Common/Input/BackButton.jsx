import React from 'react';
import BackIcon from '../../../static/svg/back-icon.svg';

const BackButton = ({ goBack }) => {
    return <button onClick={goBack} className="back-button"><BackIcon width={25}/></button>;
}

export default BackButton;