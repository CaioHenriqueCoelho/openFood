function getCurrentDateTime() {
    const now = new Date();

    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = now.getDate();
    day = day < 10 ? '0' + day : day;

    let hours = now.getHours();
    hours = hours < 10 ? '0' + hours : hours;
    let minutes = now.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let seconds = now.getSeconds();
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

module.exports = getCurrentDateTime;