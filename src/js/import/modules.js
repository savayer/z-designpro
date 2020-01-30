import "%modules%/nav/nav";
import "%modules%/menu/menu";
import "%modules%/main/main";
import "%modules%/blog/blog";
import "%modules%/footer/footer"
import './blur'
import './modal'

document.addEventListener('DOMContentLoaded', () => {
    const process = document.querySelector('.process')
    if (process) {
        process.classList.add('loaded')
    }
})