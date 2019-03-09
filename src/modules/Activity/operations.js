import axios from 'axios';
import { baseUrl } from './constants';
import {
    getActivitiesRequest,
    getActivitiesFailure,
    getActivitiesSuccess,
    updateActivitiesRequest,
    updateActivitiesFailure,
    updateActivitiesSuccess,
    resetActivitiesRequest,
    resetActivitiesSuccess,
    resetActivitiesFailure,
    updateActivityRequest,
    updateActivityFailure,
    updateActivitySuccess,
} from './actions';


function getActivities() {
    return async dispatch => {
        dispatch(getActivitiesRequest());

        try {
            const path = `${baseUrl}/activities`;
            const { data } = await axios.get(path);

            dispatch(getActivitiesSuccess(data));
        }
        catch(error) {
            const { response } = error;

            if (response) {
                const { status, statusText } = response;

                dispatch(getActivitiesFailure(`${status}: ${statusText}`));
            }
        }
    }
}


function updateActivities(activityIds) {
    return async dispatch => {
        dispatch(updateActivitiesRequest());

        Promise.all (
            activityIds.map(async activityId => {
                const path=`${baseUrl}/activities/${activityId}`;

                await axios.post(path, { "is_archived": true });
            }))
        .then(data => dispatch(updateActivitiesSuccess(data)))
        .catch(error => dispatch(updateActivitiesFailure(error)))
    };
};


function updateActivity(activityId) {
    return async dispatch => {
        dispatch(updateActivityRequest());

        try {
            const path=`${baseUrl}/activities/${activityId}`;
            const { data } = await axios.post(path, { "is_archived": true });

            dispatch(updateActivitySuccess(data));
        }
        catch(error) {
            const { response } = error;

            if (response) {
                const { status, statusText } = response;

                dispatch(updateActivityFailure(`${status}: ${statusText}`));
            }
        }
    }
}


function getActivity(id) {
    return async dispatch => {
        dispatch(getActivityRequest());

        try {
            const path = `${baseUrl}/activities/${id}`;
            const { data } = await axios.get(path);

            dispatch(getActivitySuccess(data));
        }
        catch(error) {
            const { response } = error;

            if (response) {
                const { status, statusText } = response;

                dispatch(getActivityFailure(`${status}: ${statusText}`));
            }
        }
    }
}



function resetActivities() {
    return async dispatch => {
        dispatch(resetActivitiesRequest());

        try {
            const path=`${baseUrl}/reset`;
            const { data } = await axios.get(path);

            dispatch(resetActivitiesSuccess(data))
        }
        catch(error) {
            const { response } = error;

            if (response) {
                const { status, statusText } = response;

                dispatch(resetActivitiesFailure(`${status}: ${statusText}`));
            }
        }
    }
}


export {
    getActivities,
    updateActivities,
    resetActivities,
    updateActivity,
    getActivity,
}