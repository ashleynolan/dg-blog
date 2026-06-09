const DISQUS_SCRIPT_URL = 'https://ashleynolan.disqus.com/embed.js';
let loaded = false;

function hideDisqusAd() {
    const thread = document.getElementById('disqus_thread');
    if (!thread) return;

    const observer = new MutationObserver(() => {
        const adFrame = thread.querySelector('iframe:first-of-type');
        if (adFrame) {
            adFrame.style.setProperty('display', 'none', 'important');
            observer.disconnect();
        }
    });

    observer.observe(thread, { childList: true, subtree: true });
}

function loadDisqus() {
    if (loaded) return;
    loaded = true;

    hideDisqusAd();

    const s = document.createElement('script');
    s.src = DISQUS_SCRIPT_URL;
    s.setAttribute('data-timestamp', +new Date());
    (document.head || document.body).appendChild(s);
}

export function initDisqus() {
    const thread = document.getElementById('disqus_thread');
    if (!thread) return;

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            loadDisqus();
            observer.disconnect();
        }
    }, { rootMargin: '200px' });

    observer.observe(thread);
}
