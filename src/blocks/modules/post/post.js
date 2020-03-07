const wrapper = document.querySelector('.single_post__wrapper')
const closeButton = document.querySelector('.single_post__close')

if (wrapper) {
    wrapper.classList.add('fadein')
    const aside = document.querySelector('.single_post__aside');
    const sticky = aside.offsetTop;

    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(() => {
            closeButton.classList.add('animate')
            setTimeout(() => {
                closeButton.classList.remove('animate')
            }, 600)
        }, 500)
    })

    window.onscroll = function() {    
        if (this.pageYOffset >= sticky+50) {
            aside.classList.add("sticky")
            const right = ((document.documentElement.clientWidth - wrapper.clientWidth) / 2) - 100 + 'px';
            aside.style.right = right
        } else {
            aside.classList.remove("sticky");
            aside.removeAttribute('style')
        }
    }
}