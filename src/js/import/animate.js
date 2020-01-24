/* import Snap from 'snapsvg-cjs'

const el = document.querySelector('.close_icon')
const s = new Snap('.close_icon')
const closeIcon = s.select('polygon#button')

const pointsConfig = {
    to: closeIcon.attr('data-points-hover'),
    to: ["22", "41", "51","41", "51","46", "22","46"],
    from: closeIcon.attr('points')
}

console.log(pointsConfig)


el.addEventListener('mouseenter', () => {
    closeIcon.animate( { points: pointsConfig.to }, 250, mina.elastic);
})

el.addEventListener('mouseleave', () => {
    closeIcon.animate({ points: pointsConfig.from }, 250, mina.elastic);
}) */