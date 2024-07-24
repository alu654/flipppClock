document.addEventListener('DOMContentLoaded', () => {
    const hoursCard = document.getElementById('hours');
    const minutesCard = document.getElementById('minutes');
    const secondsCard = document.getElementById('seconds');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const sizeSlider = document.getElementById('size-slider');
    const flipClock = document.getElementById('flip-clock');

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        flip(hoursCard, hours);
        flip(minutesCard, minutes);
        flip(secondsCard, seconds);
    }

    function flip(card, newTime) {
        const top = card.querySelector('.top');
        const bottom = card.querySelector('.bottom');
        const flip = card.querySelector('.flip');
        const currentTime = top.textContent;

        if (currentTime !== newTime) {
            top.textContent = newTime;
            bottom.textContent = currentTime;
            
            flip.classList.remove('flip-top');
            flip.classList.remove('flip-bottom');
            void flip.offsetWidth; // Trigger reflow

            if (parseInt(newTime) > parseInt(currentTime)) {
                flip.classList.add('flip-top');
            } else {
                flip.classList.add('flip-bottom');
            }
        }
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light');
        themeToggle.textContent = body.classList.contains('light') ? '🌞' : '🌙';
    });

    sizeSlider.addEventListener('input', (event) => {
        const size = event.target.value;
        flipClock.style.transform = `scale(${size / 100})`;
    });

    setInterval(updateClock, 1000);
    updateClock();
});