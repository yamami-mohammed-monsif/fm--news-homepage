const navigationBar = document.getElementById('navigation-bar');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    var visible = navigationBar.getAttribute('data-visible');
    if (visible === 'false') {
        navigationBar.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
        
    } else {
        navigationBar.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }
})