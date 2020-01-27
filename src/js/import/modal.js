import $ from 'jquery'
import '../../../node_modules/jquery-ui/ui/effect'

function animateOverlay(el, dur, easing = 'linear', close = false, closeOverlay = false) {
    let fake = {}

    fake.fake = close ? 0 : 125
    $(el).animate(fake, {
        step(now, fx) {
            now = 125 - now            
            $(this).css('transform', 'translateX(' + now + '%)');
        },
        done() {
            if (closeOverlay) {
                el.closest('.modal').classList.remove('showed')                
            }
        },
        easing,
        duration: dur
    })
}

function setClickEventByModalToggleButton($button, modalSelector) {
    const $modal = document.querySelector(modalSelector)
    const $modalForm = $modal.querySelector('.modal__form')
    const $modalOverlay = $modal.querySelector('.modal__overlay')
    const $closeButton = $modal.querySelector('.modal__close')

    $button.addEventListener('click', e => {
        e.preventDefault()
        $modal.classList.add('showed')

        let overlaySpeed, formSpeed;

        if (document.documentElement.clientWidth <= 700) {
            overlaySpeed = 550
            formSpeed = 800
        } else {
            overlaySpeed = 600
            formSpeed = 1100
        }

        if (document.documentElement.clientWidth > 500) {
            animateOverlay($modalOverlay, overlaySpeed)
        }
        animateOverlay($modalForm, formSpeed, 'easeOutQuad')
        document.body.classList.add('overflow-hidden');
    })
    $closeButton.addEventListener('click', () => {
        animateOverlay($modalOverlay, 500, '', true, true)
        animateOverlay($modalForm, 350, '', true)
        document.body.classList.remove('overflow-hidden');
    })
}

setClickEventByModalToggleButton(document.querySelector('[data-modal="about"]'), '.modal--about')
setClickEventByModalToggleButton(document.querySelector('[data-modal="contact"]'), '.modal--contact')