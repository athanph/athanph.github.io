(() => {
    const tag = document.querySelector('html');
    const toggle = document.querySelector('.mode-switch');
    const input = toggle.querySelector('input[type=checkbox]');
    const storedMode = localStorage.getItem('jonathanmanasdev-mode') ? localStorage.getItem('jonathanmanasdev-mode') : null;
    const preferDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Check if some theme is stored in localStorage
    // Restore previous theme selection
    if (storedMode) {
        input.checked = storedMode === 'dark';
        
        if (storedMode === 'dark' && !preferDarkScheme) tag.classList.add('dark-mode');
        if (storedMode === 'light' && preferDarkScheme) tag.classList.add('light-mode');
    }

    // Check if no store theme and system preferred scheme
    if (!storedMode && preferDarkScheme) input.checked = true;

    input.addEventListener('click', toggleMode);

    function toggleMode(e) {
        const isChecked = e.target.checked;
        if (!isChecked) {
            tag.classList.remove('dark-mode');
            tag.classList.add('light-mode');
        } else {
            tag.classList.remove('light-mode');
            tag.classList.add('dark-mode');
        }
        
        localStorage.setItem('jonathanmanasdev-mode', isChecked ? 'dark' : 'light');
        input.checked = isChecked;
    }

    // Project Detail Dialog
    let dialogElem;
    let lastActiveElement;
    const showButtons = document.querySelectorAll(".show");
    const closeButtons = document.querySelectorAll(".close");

    showButtons.forEach(btn => {
        const id = btn.getAttribute("data-detail");

        btn.addEventListener("click", () => {
            dialogElem = document.getElementById(`dialog-${id}`);
            dialogElem.showModal();
            lastActiveElement = btn;
            dialogElem.addEventListener("close", () => {
                lastActiveElement.focus();
            });
        });

    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            dialogElem.close();
        });
    });
})();
