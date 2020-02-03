const wrapper = document.querySelector('.single_post__wrapper');
const aside = document.querySelector('.single_post__aside');
const sticky = aside.offsetTop;

window.onscroll = function() {    
    if (this.pageYOffset >= sticky+80) {
        aside.classList.add("sticky")
        const right = ((document.documentElement.clientWidth - wrapper.clientWidth) / 2) - 100 + 'px';
        aside.style.right = right
    } else {
        aside.classList.remove("sticky");
        aside.removeAttribute('style')
    }
};