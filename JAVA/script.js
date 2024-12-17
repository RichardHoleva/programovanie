document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('.languages span');
    const navbarLinks = document.querySelectorAll('.header a');

    languageButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent click event from propagating to the body
            languageButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.fontWeight = 'normal'; // Revert to normal settings
                btn.style.textDecoration = 'none'; // Remove underline
            });
            button.classList.add('active');
            button.style.fontWeight = 'bold'; // Make text bold
            button.style.textDecoration = 'underline'; // Underline text
        });
    });

    navbarLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            navbarLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    document.body.addEventListener('click', () => {
        window.location.href = 'brabrand_page.html'; // Redirect to brabrand_page.html
    });
});