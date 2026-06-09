import Prism from "./libs/prism";
import { initCarousel } from "./carousel.js";
import { initDateHandler } from "./dateHandler.js";
import { initDisqus } from "./libs/disqus.js";
import { initExternalLinks } from "./externalLinks.js";
import { initWork } from "./work.js";

function ready(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

const init = function () {
    widowCheck();
    initCarousel();
    initDateHandler();
    initDisqus();
    initExternalLinks();
    initWork();
};

const widowCheck = function () {
    const titleSelectors = '.c-content--post h1';
    const postTitles = document.querySelectorAll(titleSelectors);

    postTitles.forEach((title) => {
        const wordArray = title.innerText.split(' ');
        if (wordArray.length > 1) {
            wordArray[wordArray.length - 2] += '&nbsp;' + wordArray[wordArray.length - 1];
            wordArray.pop();
            title.innerHTML = wordArray.join(' ');
        }
    });
}

ready(init);
