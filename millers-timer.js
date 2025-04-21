// Miller's Planet Timer (Time Dilation)
function startMillersTimer() {
    let millersSeconds = 0;
    const timerElement = document.getElementById('millersTimer');

    function formatMillersTime(seconds) {
        const earthHours = seconds * 170.33;

        const years = Math.floor(earthHours / (24 * 365));
        const days = Math.floor((earthHours % (24 * 365)) / 24);
        const hours = String(Math.floor(earthHours % 24)).padStart(2, '0');
        const minutes = String(Math.floor((earthHours * 60) % 60)).padStart(2, '0');
        const secs = String(Math.floor((earthHours * 3600) % 60)).padStart(2, '0');

        return `${years} Years ${days} Days ${hours}:${minutes}:${secs}`;
    }

    setInterval(() => {
        millersSeconds++;
        timerElement.textContent = formatMillersTime(millersSeconds);
    }, 1000); // Update every real second
}

// Start the Miller's timer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', startMillersTimer);
