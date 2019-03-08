import { missedCallTypes } from './constants';

function getActivityIds(activities) {
    return Object.keys(activities);
}

function getMissedCallCount(activities) {
    let totalMissedActivities = 0;

    getInbox(activities).forEach(({ call_type }) => {
        if (call_type && missedCallTypes.includes(call_type)) {
            totalMissedActivities += 1;
        }
    });

    return totalMissedActivities;
};

function isMissedCall(call_type) {
    return missedCallTypes.includes(call_type);
}


function getInbox(activities) {
    return getActivities(activities).filter(activity => !activity.is_archived);
};

function getActivityById(id, activities) {
    return activities[id];
}

function getActivities(activities) {
    return getActivityIds(activities).map(activityId => {
        return activities[activityId];
    });
}

function getActiveList(activeNav, activities) {
    switch (activeNav) {
        case 'inbox':
            return getInbox(activities)

        case 'all':
            return getActivities(activities)

        default:
            return getActivities(activities)
    };
};



export {
    getActivityIds,
    getMissedCallCount,
    isMissedCall,
    getInbox,
    getActivityById,
    getActivities,
    getActiveList,
}