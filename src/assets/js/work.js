export function initWork() {
    const wrapper = document.querySelector('.c-work');
    if (!wrapper) return;

    const navItems = [...wrapper.querySelectorAll('.c-work-nav-link')];
    const sections = [...wrapper.querySelectorAll('.c-work-section')];

    function changeActiveSection(index) {
        sections.forEach((s, i) => {
            s.classList.toggle('active', i === index);
            s.classList.toggle('inactive', i !== index);
        });
        navItems.forEach((n, i) => n.classList.toggle('active', i === index));
    }

    navItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            changeActiveSection(index);
            history.replaceState(null, '', index === 1 ? '#labs' : window.location.pathname);
        });
    });

    // Check hash on load (#labs → index 1, otherwise index 0)
    const isLabs = window.location.hash.includes('#labs');
    changeActiveSection(isLabs ? 1 : 0);

    // Brief delay before adding transition class, prevents flash on load
    setTimeout(() => wrapper.classList.add('is-loaded'), 100);
}
