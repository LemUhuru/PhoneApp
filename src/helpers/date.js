import { monthNames } from './constants';

function parseUTCDate(utcDate) {
    const newDate = new Date(utcDate);
    
    const month = newDate.getUTCMonth();
    const year = newDate.getUTCFullYear();
    const date = newDate.getUTCDate();
    const day = newDate.getUTCDay();
    const hour = newDate.getUTCHours();
    const minutes = newDate.getUTCMinutes();
    const seconds = newDate.getUTCSeconds();

    return {
        month,
        year,
        day,
        date,
        hour,
        minutes,
        seconds,
    };
}

function formatDate(month, day, year) {
    const monthName = monthNames[month];
    
    return `${monthName}, ${day} ${year}`;
}

function getMeridiem(hour) {
    return hour >= 12 ? 'PM' : 'AM';
}


export {
    parseUTCDate,
    formatDate,
    getMeridiem,
}