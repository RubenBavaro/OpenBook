function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function updateDays() {
    const monthSelect = document.getElementById('monthSelect');
    const daySelect = document.getElementById('daySelect');
    const selectedMonth = parseInt(monthSelect.value);
    const currentYear = new Date().getFullYear();
    
    let daysInMonth;
    if (selectedMonth === 2) {
        daysInMonth = isLeapYear(currentYear) ? 29 : 28;
    } else if ([4, 6, 9, 11].includes(selectedMonth)) {
        daysInMonth = 30;
    } else {
        daysInMonth = 31;
    }

    daySelect.innerHTML = '';
    for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        if (i === 23) option.selected = true;
        daySelect.appendChild(option);
    }
}

function toggleHeart(button) {
    const isPressed = button.getAttribute('aria-pressed') === 'true';
    button.setAttribute('aria-pressed', !isPressed);
    button.querySelector('span').innerHTML = isPressed ? '♡' : '♥';
}

function handleSubmit(event) {
    event.preventDefault();
    const month = document.getElementById('monthSelect').value;
    const day = document.getElementById('daySelect').value;
    const date = new Date(new Date().getFullYear(), month - 1, day);
    const formattedDate = date.toLocaleDateString('it-IT', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    alert(`Prenotazione confermata per il ${formattedDate}`);
}

document.addEventListener('DOMContentLoaded', updateDays);