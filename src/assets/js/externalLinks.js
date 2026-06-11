export function initExternalLinks() {
    const externalLinks = document.querySelectorAll('a[rel="external"]');
    externalLinks.forEach((link) => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'external noopener');
    });
}
