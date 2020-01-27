/* const $toggleMenu = document.querySelector('[data-modal="about"]')
const $aboutWrapper = document.querySelector('#about')
const $closeMenu = document.querySelector('#about .modal__close')

$toggleMenu.addEventListener('click', e => {
    e.preventDefault()
    $aboutWrapper.classList.toggle('active')
})

$closeMenu.addEventListener('click', e => {
    e.preventDefault()
    $aboutWrapper.classList.toggle('active')
}) */

const $links = document.querySelectorAll('[data-modal="about"]')
const $modal = document.querySelector('.modal')
const $modalOverlay = document.querySelector('.modal__overlay')
const $modalForm = document.querySelector('.modal__form')
const $closeModal = document.querySelector('.modal__close')

import $ from 'jquery'
import '../../../../node_modules/jquery-ui/ui/effect'

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
                $modal.classList.remove('showed')
            }
        },
        easing,
        duration: dur
    })
}

if ($links && $modal) {
    $links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            $modal.classList.add('showed')

            let overlaySpeed, formSpeed;

            if (document.documentElement.clientWidth <= 700) {
                overlaySpeed = 550
                formSpeed = 800
            } else if (document.documentElement.clientWidth <= 350) {
                overlaySpeed = 250
                formSpeed = 600
            } else {
                overlaySpeed = 600
                formSpeed = 1100
            }

            animateOverlay($modalOverlay, overlaySpeed)
            animateOverlay($modalForm, formSpeed, 'easeOutQuad')
            document.body.classList.add('overflow-hidden');
        })
    })
}

if ($closeModal) {
    $closeModal.addEventListener('click', () => {
        animateOverlay($modalOverlay, 500, '', true, true)
        animateOverlay($modalForm, 350, '', true)
        document.body.classList.remove('overflow-hidden');
    })
}