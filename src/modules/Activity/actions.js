import {
    GET_ACTIVITIES_REQUEST,
    GET_ACTIVITIES_FAILURE,
    GET_ACTIVITIES_SUCCESS,
    GET_ACTIVITIY_REQUEST,
    GET_ACTIVITY_FAILURE,
    GET_ACTIVITY_SUCCESS,
    UPDATE_ACTIVITY_REQUEST,
    UPDATE_ACTIVITY_FAILURE,
    UPDATE_ACTIVITY_SUCCESS,
    UPDATE_ACTIVITIES_REQUEST,
    UPDATE_ACTIVITIES_FAILURE,
    UPDATE_ACTIVITIES_SUCCESS,
    RESET_ACTIVITIES_FAILURE,
    RESET_ACTIVITIES_REQUEST,
    RESET_ACTIVITIES_SUCCESS,
} from './types';


function getActivitiesRequest() {
    return {
        type: GET_ACTIVITIES_REQUEST,
    }
}

function getActivitiesFailure(error) {
    return {
        type: GET_ACTIVITIES_FAILURE,
        payload: error,
    }
}


function getActivitiesSuccess(data) {
    return {
        type: GET_ACTIVITIES_SUCCESS,
        payload: data,
    }
}

function updateActivityRequest() {
    return {
        type: UPDATE_ACTIVITY_REQUEST,
    }
}

function updateActivityFailure(error) {
    return {
        type: UPDATE_ACTIVITY_FAILURE,
        payload: error,
    }
}


function updateActivitySuccess(data) {
    return {
        type: UPDATE_ACTIVITY_SUCCESS,
        payload: data,
    }
}


function updateActivitiesRequest() {
    return {
        type: UPDATE_ACTIVITIES_REQUEST,
    }
}

function updateActivitiesFailure(error) {
    return {
        type: UPDATE_ACTIVITIES_FAILURE,
        payload: error,
    }
}


function updateActivitiesSuccess(data) {
    return {
        type: UPDATE_ACTIVITIES_SUCCESS,
        payload: data,
    }
}


function resetActivitiesRequest() {
    return {
        type: RESET_ACTIVITIES_REQUEST,
    }
}

function resetActivitiesFailure(error) {
    return {
        type: RESET_ACTIVITIES_FAILURE,
        payload: error,
    }
}


function resetActivitiesSuccess(data) {
    return {
        type: RESET_ACTIVITIES_SUCCESS,
        payload: data,
    }
}



export {
    getActivitiesRequest,
    getActivitiesFailure,
    getActivitiesSuccess,
    updateActivitiesRequest,
    updateActivitiesFailure,
    updateActivitiesSuccess,
    resetActivitiesRequest,
    resetActivitiesFailure,
    resetActivitiesSuccess,
    updateActivityFailure,
    updateActivityRequest,
    updateActivitySuccess,
}