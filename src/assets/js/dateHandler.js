export function initDateHandler() {
    const ageEl = document.getElementById('age');
    if (!ageEl) return;

    const birthdate = new Date(ageEl.getAttribute('data-age'));
    const now = new Date();

    let ageYears = now.getFullYear() - birthdate.getFullYear();
    const birthdayThisYear = new Date(now.getFullYear(), birthdate.getMonth(), birthdate.getDate());

    let lastBirthday;
    if (now >= birthdayThisYear) {
        lastBirthday = birthdayThisYear;
    } else {
        ageYears--;
        lastBirthday = new Date(now.getFullYear() - 1, birthdate.getMonth(), birthdate.getDate());
    }

    const msPerDay = 1000 * 60 * 60 * 24;
    const birthYearDays = Math.floor((now - lastBirthday) / msPerDay);

    Array.from(ageEl.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) node.remove();
    });
    ageEl.append(`${ageYears} years, ${birthYearDays} days`);
}
