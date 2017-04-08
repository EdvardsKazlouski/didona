export function formatTime (date = new Date()) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${formatNumber(hours)}:${formatNumber(minutes)}`;
}

function formatNumber (num) {
    return num < 10 ? '0' + (num + '') : num;
}

export function formatDuration (durationInMs) {
    const hours = Math.floor(durationInMs / 1000 / 60 / 60);
    const minutes = Math.floor(durationInMs / 1000 / 60) - hours * 60;

    if (hours > 0) {  return `${hours} Hours, ${minutes} Minutes`; }
    else { return `${minutes} Minutes`; }
}
