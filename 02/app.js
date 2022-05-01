
document.addEventListener('DOMContentLoaded', function () {

    const divE = document.querySelector('div');

    divE.addEventListener('mousemove', () => { console.log('jestem w divie') })

    divE.addEventListener('mouseleave', () => { console.log('opuszczam diva') })
})