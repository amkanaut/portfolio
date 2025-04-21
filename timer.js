function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function startTimer() {
    let timeSpent = parseInt(getCookie('timeSpent')) || 0;
    const timerElement = document.getElementById('timer');

    function formatTime(seconds) {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    }

    // Update the timer every second
    setInterval(() => {
        timeSpent++;
        timerElement.textContent = formatTime(timeSpent);
        setCookie('timeSpent', timeSpent, 7);
    }, 1000);
}
window.onload = function () {
    startMillersTimer();
};

document.addEventListener('DOMContentLoaded', startTimer);
