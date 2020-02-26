const inputs = document.querySelectorAll('.contact__group .field')

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