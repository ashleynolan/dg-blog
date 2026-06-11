const CANVAS_WIDTH = 618;
const CANVAS_HEIGHT = 274;
const VCOLS = 14;
const HCOLS = 12;

function preloadImages(imgEls) {
    return Promise.all([...imgEls].map(img => new Promise(resolve => {
        if (img.complete) return resolve();
        img.addEventListener('load', resolve);
        img.addEventListener('error', resolve);
    })));
}

export function initCarousel() {
    const container = document.getElementById('c-homeCarousel');
    if (!container) return;

    const canvas = document.getElementById('c-homeCarousel-canvasFrame-canvas');
    const canvasFrame = document.getElementById('c-homeCarousel-canvasFrame');
    const canvasLink = document.getElementById('c-homeCarousel-canvasFrame-link');
    const carouselWrapper = container.querySelector('.c-homeCarousel-wrapper');
    const carousel = container.querySelector('.c-homeCarousel-carousel');

    let carouselItems = [...container.querySelectorAll('.c-homeCarousel-carousel-item')];
    const numOfItems = carouselItems.length;

    const rowHeight = Math.ceil(CANVAS_HEIGHT / HCOLS);
    const colWidth = Math.ceil(CANVAS_WIDTH / VCOLS);
    const stripesLength = HCOLS > VCOLS ? HCOLS : VCOLS;

    let ctx = null;
    const canvasVisible = canvasFrame && getComputedStyle(canvasFrame).display !== 'none';

    if (canvasVisible && canvas && canvas.getContext) {
        ctx = canvas.getContext('2d');
    }

    let activeItem = null;
    let carouselItemWidth = 0;
    let transDirection = '';
    let transitioning = false;
    let stripeProgress = [];
    let currentCanvas = null;
    let newCanvas = null;

    // Inject prev/next buttons
    const btnLeft = document.createElement('a');
    btnLeft.id = 'c-homeCarousel-carLeft';
    btnLeft.className = 'c-homeCarousel-carLeft';
    btnLeft.href = '#';
    btnLeft.setAttribute('aria-label', 'Previous');
    btnLeft.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 658 1024" aria-hidden="true"><path fill="currentColor" transform="translate(0,960) scale(1,-1)" d="M424 52l-372.571 372q-21.143 21.143-21.143 51.714t21.143 51.714l372.571 372q21.143 21.143 51.714 21.143t51.714-21.143l42.857-42.857q21.143-21.143 21.143-51.714t-21.143-51.714l-277.714-277.714 277.714-277.143q21.143-21.714 21.143-52t-21.143-51.429l-42.857-42.857q-21.143-21.143-51.714-21.143t-51.714 21.143z"/></svg>';

    const btnRight = document.createElement('a');
    btnRight.id = 'c-homeCarousel-carRight';
    btnRight.className = 'c-homeCarousel-carRight';
    btnRight.href = '#';
    btnRight.setAttribute('aria-label', 'Next');
    btnRight.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 658 1024" aria-hidden="true"><path fill="currentColor" transform="translate(0,960) scale(1,-1)" d="M628 475.428q0-29.714-21.143-52l-372.571-372q-21.143-21.143-51.429-21.143t-51.429 21.143l-43.429 42.857q-21.143 22.286-21.143 52 0 30.286 21.143 51.429l277.714 277.714-277.714 277.143q-21.143 22.286-21.143 52 0 30.286 21.143 51.429l43.429 42.857q20.571 21.714 51.429 21.714t51.429-21.714l372.571-372q21.143-21.143 21.143-51.429z"/></svg>';

    container.appendChild(btnLeft);
    container.appendChild(btnRight);

    // Reorder items so the midpoint item is first (active element is always first visible)
    let midPoint = Math.floor(numOfItems / 2);
    if (numOfItems % 2 === 0) midPoint--;

    const itemsToMove = carouselItems.slice(numOfItems - midPoint);
    itemsToMove.forEach(item => carousel.prepend(item));

    // Refresh item list after reorder
    carouselItems = [...container.querySelectorAll('.c-homeCarousel-carousel-item')];
    activeItem = container.querySelector('#workArticle1') || carouselItems[0];
    activeItem.classList.add('active');

    // Measure item width (including margin)
    const itemStyle = getComputedStyle(carouselItems[0]);
    const itemMarginRight = parseFloat(itemStyle.marginRight) || 0;
    carouselItemWidth = carouselItems[0].offsetWidth + itemMarginRight;

    // Size the wrapper to fit all items
    const itemImgWidth = carouselItems[0].querySelector('img').offsetWidth;
    const wrapperWidth = itemImgWidth * numOfItems + 18 * numOfItems;
    const heightDiff = (CANVAS_HEIGHT - carouselItems[0].querySelector('img').offsetHeight) / 2;

    carouselWrapper.style.width = wrapperWidth + 'px';
    carouselWrapper.style.left = -(wrapperWidth / 2) + 'px';
    carousel.style.paddingTop = Math.floor(heightDiff + 13) + 'px';

    function initialDraw() {
        if (!ctx) return;
        const img = activeItem.querySelector('img');
        ctx.drawImage(img, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }

    function updateState() {
        const activeLink = activeItem.querySelector('a');
        const activeH3 = activeItem.querySelector('h3');
        if (canvasLink && activeLink) {
            canvasLink.href = activeLink.href;
        }
        const frameH3 = canvasLink && canvasLink.querySelector('h3');
        if (frameH3 && activeH3) {
            frameH3.innerHTML = activeH3.innerHTML;
        }
    }

    function modifyCanvas(canvasData, i, j, stripe) {
        const angle = Math.floor(Math.sin(2 * Math.PI * 8.5 * j / CANVAS_WIDTH) * 40) -
            (transDirection === 'left' ? 50 : -50);

        const index = (j * 4) * CANVAS_WIDTH + ((i + angle) * 4);
        const hozIndex = (index - ((j * 4) * CANVAS_WIDTH)) / 4;

        if (
            (stripeProgress[stripe] > 2 ||
                ((transDirection === 'left' && hozIndex >= 0) ||
                    (transDirection === 'right' && hozIndex < CANVAS_WIDTH))) &&
            index > 0
        ) {
            canvasData.data[index] = newCanvas.data[index];
            canvasData.data[index + 1] = newCanvas.data[index + 1];
            canvasData.data[index + 2] = newCanvas.data[index + 2];
            canvasData.data[index + 3] = newCanvas.data[index + 3];
        }

        return canvasData;
    }

    function animate() {
        let modifiedCanvas = currentCanvas;
        const stripeLength = stripeProgress.length;

        for (let stripe = 0; stripe < stripeLength; stripe++) {
            if (stripeProgress[stripe] < stripesLength + 2) {
                let iStart, iEnd;

                if (transDirection === 'left') {
                    iStart = colWidth * stripeProgress[stripe];
                    iEnd = colWidth * (stripeProgress[stripe] + 1);
                } else {
                    iStart = colWidth * (stripesLength - stripeProgress[stripe] - 1);
                    iEnd = colWidth * (stripesLength - stripeProgress[stripe]);
                }

                for (let j = Math.floor(stripe * rowHeight); j < Math.ceil((stripe * rowHeight) + rowHeight); j++) {
                    for (let i = iStart; i < iEnd; i++) {
                        modifiedCanvas = modifyCanvas(modifiedCanvas, i, j, stripe);
                    }
                }

                if (stripeProgress[stripesLength - 1] === stripesLength + 1) {
                    transitioning = false;
                    updateState();
                }

                if (stripeProgress[stripe] !== stripesLength + 2) {
                    stripeProgress[stripe]++;
                }
            }
        }

        if (stripeLength < stripesLength) {
            stripeProgress.push(0);
        }

        ctx.putImageData(modifiedCanvas, 0, 0);
    }

    function animationLoop() {
        animate();
        if (transitioning) {
            requestAnimationFrame(animationLoop);
        }
    }

    function slideCarousel() {
        carouselItems = [...container.querySelectorAll('.c-homeCarousel-carousel-item')];

        if (transDirection === 'left') {
            const lastItem = carouselItems[carouselItems.length - 1];
            carousel.prepend(lastItem);
            carousel.style.transition = 'none';
            carousel.style.marginLeft = '-' + carouselItemWidth + 'px';

            // Force reflow then animate in
            carousel.getBoundingClientRect();
            carousel.style.transition = 'margin-left 400ms ease';
            carousel.style.marginLeft = '0px';

            carouselItems = [...container.querySelectorAll('.c-homeCarousel-carousel-item')];

        } else if (transDirection === 'right') {
            const firstItem = carouselItems[0];

            carousel.style.transition = 'margin-left 400ms ease';
            carousel.style.marginLeft = '-' + carouselItemWidth + 'px';

            carousel.addEventListener('transitionend', function onEnd() {
                carousel.removeEventListener('transitionend', onEnd);
                carousel.append(firstItem);
                carousel.style.transition = 'none';
                carousel.style.marginLeft = '0px';
                carouselItems = [...container.querySelectorAll('.c-homeCarousel-carousel-item')];
            });
        }

        if (canvasVisible && ctx) {
            setTimeout(animationLoop, 1);
        } else {
            transitioning = false;
            updateState();
        }
    }

    function draw() {
        const currentImg = activeItem.querySelector('img');

        activeItem.classList.remove('active');

        let nextItem;
        if (transDirection === 'left') {
            const idx = carouselItems.indexOf(activeItem);
            nextItem = carouselItems[(idx - 1 + carouselItems.length) % carouselItems.length];
        } else {
            const idx = carouselItems.indexOf(activeItem);
            nextItem = carouselItems[(idx + 1) % carouselItems.length];
        }

        activeItem = nextItem;
        nextItem.classList.add('active');

        if (canvasVisible && ctx) {
            const nextImg = nextItem.querySelector('img');
            ctx.drawImage(nextImg, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            newCanvas = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

            ctx.drawImage(currentImg, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            currentCanvas = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        }

        transitioning = true;
        stripeProgress = [0];

        slideCarousel();
    }

    // Attach button listeners
    btnLeft.addEventListener('click', function (e) {
        e.preventDefault();
        if (!transitioning) {
            transDirection = 'left';
            draw();
        }
    });

    btnRight.addEventListener('click', function (e) {
        e.preventDefault();
        if (!transitioning) {
            transDirection = 'right';
            draw();
        }
    });

    // Preload images then do the initial draw
    const featureImgs = container.querySelectorAll('.c-homeCarousel-featureImg');
    preloadImages(featureImgs).then(() => {
        updateState();
        initialDraw();
    });
}
