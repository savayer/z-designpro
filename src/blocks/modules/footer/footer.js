window.addEventListener('load', () => {
//document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('.footer')
    const menuWrapper = document.querySelector('.menu_wrapper')
    const overlay = document.querySelector('.overlay')
    const overlayProject = document.querySelector('.overlay-project')

    footer.classList.remove('none')
    menuWrapper.classList.remove('none')
    overlay.classList.add('block')

    if (overlayProject) {
        overlayProject.classList.add('block')
    }
})

const goUp = document.querySelector('.footer__go_up a')
if (goUp) {
    Math.easeInOutQuad = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    function scrollTo(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;

        var animateScroll = function () {
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    goUp.addEventListener('click', e => {
        e.preventDefault()
        scrollTo(document.documentElement, 0, 1000);
    })
}