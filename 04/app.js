const allDiv = document.querySelectorAll('div');
const bodyE = document.querySelector('body');

allDiv.forEach(div => {
    div.addEventListener('click', function(e){
        let time = parseInt(this.dataset.time);
        let target = e.currentTarget
        setTimeout(function(){
            target.classList.add('clicked')
        }, time)
    })
});

function removeClass () {
    allDiv.forEach(div => div.classList.remove('clicked'));
}

bodyE.addEventListener('click', removeClass);