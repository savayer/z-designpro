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
                el.closest('.modal').classList.remove('showed')                
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
    })

    function openModal(e) {
        e.preventDefault()
        $modal.classList.add('showed')
        if (modalSelector === '.modal--about') {
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
                    autoplaySpeed: 1200
                })
            }, 500)
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