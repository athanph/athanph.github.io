
const tag = document.querySelector('html');
const toggle = document.querySelector('.mode-switch');
const input = toggle.querySelector('input[type=checkbox]');
const storedMode = localStorage.getItem('jonathanmanasdev-mode') ? localStorage.getItem('jonathanmanasdev-mode') : null;
const preferDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

function toggleMode(e) {
    if (!e.target.checked) {
        tag.classList.remove('dark-mode');
        tag.classList.add('light-mode');
        localStorage.setItem('jonathanmanasdev-mode', 'light');
    } else {
        tag.classList.remove('light-mode');
        tag.classList.add('dark-mode');
        localStorage.setItem('jonathanmanasdev-mode', 'dark');
    }

    input.checked = e.target.checked;
}

// Check if some theme is stored in localStorage
// Restore previous theme selection
if (storedMode) {
    if (storedMode === 'dark') {
        tag.classList.add('dark-mode');
        input.checked = true;
    }

    if (storedMode === 'light') {
        tag.classList.add('light-mode');
        input.checked = false;
    }
}

// Check if no store theme and system preferred scheme
if (!storedMode && preferDarkScheme) {
    tag.classList.add('dark-mode');
    input.checked = true;
}


input.addEventListener('click', toggleMode);

