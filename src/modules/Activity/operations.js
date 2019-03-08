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
            const { response: { status, statusText }} = error;
            dispatch(getActivitiesFailure(`${status}: ${statusText}`));
        }
    }
}

function updateActivities(activityIds) {
    return async dispatch => {
        dispatch(updateActivitiesRequest());

        Promise.all (
            activityIds.map(async activityId => {
                const path=`${baseUrl}/activities/${activityId}`;
                const { data } = await axios.post(path, { "is_archived": true });
                return data;
            }))
        .then(data => {
            dispatch(updateActivitiesSuccess(data))
        })
        .catch(error => {
            dispatch(updateActivitiesFailure(error))
        })
    };
};


function updateActivity(activityId) {
    return async dispatch => {
        dispatch(updateActivityRequest());

        try {
            const path=`${baseUrl}/activities/${activityId}`;
            const { data } = await axios.post(path, { "is_archived": true })

            dispatch(updateActivitySuccess(data));
        }
        catch(error) {
            const { response: { status, statusText }} = error;
            dispatch(getActivitiesFailure(`${status}: ${statusText}`));
        }
    }
}


function getActivity(id) {
    return async dispatch => {
        dispatch(getActivitiesRequest());

        try {
            const path = `${baseUrl}/activities/${id}`;
            const { data } = await axios.get(path);

            dispatch(getActivitiesSuccess(data));
        }
        catch(error) {
            const { response: { status, statusText }} = error;
            dispatch(getActivitiesFailure(`${status}: ${statusText}`));
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
            const { response: { status, statusText }} = error;
            dispatch(getActivitiesFailure(`${status}: ${statusText}`));
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