document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement; // Gets the <html> element

    // Function to update button icon and aria-label based on theme
    function updateButtonAppearance(theme) {
        if (theme === 'light') {
            themeToggleButton.textContent = '🌙'; // Moon icon indicates light mode is active
            themeToggleButton.setAttribute('aria-label', 'Cambiar a tema oscuro');
        } else {
            themeToggleButton.textContent = '☀️'; // Sun icon indicates dark mode is active
            themeToggleButton.setAttribute('aria-label', 'Cambiar a tema claro');
        }
    }

    // Load saved theme from localStorage
    let currentTheme = localStorage.getItem('theme');

    // If no saved theme, check system preference if possible, otherwise default to 'dark'
    if (!currentTheme) {
        // Optional: Check system preference for dark mode
        // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        //    currentTheme = 'dark';
        // } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        //    currentTheme = 'light';
        // } else {
        //    currentTheme = 'dark'; // Default if no system preference or not supported
        // }
        currentTheme = 'dark'; // Simplified: Default to dark if nothing saved.
    }

    // Apply the loaded/default theme
    htmlElement.setAttribute('data-theme', currentTheme);
    updateButtonAppearance(currentTheme);

    // Event listener for the toggle button
    themeToggleButton.addEventListener('click', () => {
        // Determine the new theme
        const isDark = htmlElement.getAttribute('data-theme') === 'dark';
        const newTheme = isDark ? 'light' : 'dark';
        
        // Apply new theme
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateButtonAppearance(newTheme);
    });
});
