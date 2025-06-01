    // Dropdown menu functionaliteit
    document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    toggleButton.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });
    
    // Sluit menu bij klik op een link
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', () => {
            dropdownMenu.classList.remove('show');
        });
    });
    
    // Sluit menu bij klik buiten het menu
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown-menu') && !event.target.closest('.dropdown-toggle')) {
            dropdownMenu.classList.remove('show');
        }
    });
});