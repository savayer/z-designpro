const inputs = document.querySelectorAll('.contact__group .field')
const labels = document.querySelectorAll('.contact__group span')

inputs.forEach(input => {
    input.addEventListener('focus', e => {
        e.target.closest('.contact__group').children[1].classList.add('label-active')
    })
    input.addEventListener('blur', e => {
        document.querySelectorAll('.label-active').forEach(item => {
            const field = item.closest('.contact__group').children[0]
            if (!field.value) {
                item.classList.remove('label-active')
            }
        })
    })
})

labels.forEach(label => {
    label.addEventListener('click', e => {
        e.target.closest('.contact__group').children[0].focus();
    })
})