import $ from 'jquery'
import '../../../node_modules/jquery-ui/ui/effect'
import 'slick-carousel'

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
                $(el).closest('.modal').removeClass('showed')
            }
        },
        easing,
        duration: dur
    })
}

function setClickEventByModalToggleButton($button, modalSelector) {
    const $modal = document.querySelector(modalSelector)
    if (!$modal) return
    const $modalForm = $modal.querySelector('.modal__form')
    const $modalOverlay = $modal.querySelector('.modal__overlay')
    const $closeButton = $modal.querySelector('.modal__close')
        
    $button.addEventListener('click', openModal)

    $closeButton.addEventListener('click', () => {
        animateOverlay($modalOverlay, 500, '', true, true)
        animateOverlay($modalForm, 350, '', true)
        document.body.classList.remove('overflow-hidden');
        if (modalSelector === '.modal--about') {
            document.querySelectorAll('.about__content').forEach(item => item.classList.remove('fadein'))
            document.querySelectorAll('.about__buttons').forEach(item => item.classList.remove('fadein'))
            
            setTimeout(() => {
                $('.modal__logos').slick('unslick')
            }, 300)
        }
        if (modalSelector === '.modal--contact') {
            setTimeout(() => {
                $('.dropline_img').attr('src', '')
            }, 300)
        }
    })

    function openModal(e) {
        e.preventDefault()
        $modal.classList.add('showed')
        if (modalSelector === '.modal--about') {
            document.querySelectorAll('.about__content').forEach(item => item.classList.add('fadein'))
            document.querySelectorAll('.about__buttons').forEach(item => item.classList.add('fadein'))
            setTimeout(function() {
                $('.modal__logos').slick({
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    fade: true,
                    cssEase: 'linear',
                    dots: false,
                    arrows: false,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    speed: 1000,
                })
            }, 500)
        }
        if (modalSelector === '.modal--contact') {
            const dataSrc = $('.dropline_img').data('src')
            $('.dropline_img').attr('src', dataSrc)            
        }

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
        setTimeout(() => {
            $closeButton.classList.add('animate_in_modal')
            setTimeout(() => {
                $closeButton.classList.remove('animate_in_modal')
            }, 600)
        }, 500)
        document.body.classList.add('overflow-hidden');
    }

    function removeEventsModal() {
        if (document.documentElement.clientWidth <= 500) {
            document.querySelectorAll('[data-modal]').forEach(link => {
                link.removeEventListener('click', openModal)
            })
        }
    }
    removeEventsModal()
    
    window.addEventListener('resize', () => {
        removeEventsModal()
    })
}
setClickEventByModalToggleButton(document.querySelector('[data-modal="about"]'), '.modal--about')
setClickEventByModalToggleButton(document.querySelector('[data-modal="contact"]'), '.modal--contact')

/*** */

document.addEventListener('DOMContentLoaded', () => {
    if (document.documentElement.clientWidth <= 500) {
        document.querySelectorAll('.about__content').forEach(item => item.classList.add('fadein'))
        document.querySelectorAll('.about__buttons').forEach(item => item.classList.add('fadein'))
    }
})